
import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Part } from 'app/models/parts/parts.model';
import { ModelControllerService } from 'app/module/models';
import { Segment } from 'app/models/parts/segments.model';
import { Fabricator, Model, PartControllerService } from 'app/module/parts';
import { SegmentControllerService } from 'app/module/segments';
import { FabricatorControllerService } from 'app/module/fabricators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Component({
  selector: 'fury-part-create-update',
  templateUrl: './part-create-update.component.html',
  styleUrls: ['./part-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PartCreateUpdateComponent implements OnInit {

  part: Part[];
  form: FormGroup;
  segments: Segment[];
  fabricators: Fabricator[];
  models: Model[];
  mode: 'create' | 'update' = 'create';
  selectedFile: File; // hold our file
  progress = false;
  @ViewChild('fileInput') fileInput: ElementRef;
  urlImg = '';
  fileName = '';
  fileSize: number;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<PartCreateUpdateComponent>,
    private apiSegment: SegmentControllerService,
    private apiFabricator: FabricatorControllerService,
    private apiModel: ModelControllerService,
    private apiPart: PartControllerService,
    public snackBar: MatSnackBar,
    private http: HttpClient,
    // public uploadService: UploadService,
    private fb: FormBuilder) {
    // load the sector
    this.apiSegment.getAllUsingGET().
      subscribe(seg => {
        this.segments = <Segment[]>seg;
      });
    // O ID DA COMPANHIA É FIXO PQ AINDA NAO TEM LOGIN
    this.apiFabricator.getFabricatorWithModelUsingGET(1).
      subscribe(fab => {
        this.fabricators = <Fabricator[]>fab;
      });
    // instance the form group for mode Update and Create
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      serialNumber: new FormControl(),
      idFabricator: new FormControl(),
      idModel: new FormControl(),
      idSegment: new FormControl(),
      idCompany: new FormControl(1),
      provider: new FormControl(),
      charging: new FormControl(),
      exclusive: new FormControl(),
      picture: new FormControl(),
    });

  }

  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      this.urlImg = this.defaults.picture ? environment.origin.fileServer + this.defaults.picture : '';
      this.fileName = this.defaults.picture;
      // carrega os modelos antes de atribuir valores
      this.loadModels(this.defaults.model.fabricator.id);
      // Used in the Update Mode to fill the fields
      this.form = this.fb.group({
        id: [this.defaults.id || null],
        name: [this.defaults.name],
        serialNumber: [this.defaults.serialNumber],
        idFabricator: [this.defaults.model.fabricator.id],
        idModel: [this.defaults.model.id],
        idSegment: [this.defaults.segment.id],
        idCompany: [this.defaults.idCompany],
        provider: [this.defaults.provider],
        charging: [this.defaults.charging],
        exclusive: [this.defaults.exclusive],
        picture: [this.defaults.picture]
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as Part; // takes blank :)
    }

  }

  createOrUpdate() {
    if (this.mode === 'create') {
      this.verifyName().then(
        _success => {
          // console.log(_success);
          if (typeof _success !== 'undefined' && _success.length > 0) {
          // if ( _success ) {
            this.form.setErrors({ 'invalid': true });
            this.snackBar.open('Esse nome já existe para essas configurações!', 'OK', {
              duration: 10000
            });
          } else {
            this.createPart();
          }
        }
      ).catch(
        _error => {
          console.log(_error);
        }
      );
    } else if (this.mode === 'update') {
      const name = this.form.get('name').value;
      const serialNumber = this.form.get('serialNumber').value;
      const idCompany = this.form.get('idCompany').value;
      const idModel = this.form.get('idModel').value;
      const idSegment = this.form.get('idSegment').value;
      const nameDefaults = this.defaults.name;
      const serialNumberDefaults = this.defaults.serialNumber;
      const idCompanyDefaults = this.defaults.idCompany;
      const idModelDefaults = this.defaults.model.id;
      const idSegmentDefaults = this.defaults.segment.id;
      if (
        ( name === nameDefaults) &&
        ( serialNumber === serialNumberDefaults) &&
        ( idCompany === idCompanyDefaults) &&
        ( idModel === idModelDefaults) &&
        ( idSegment === idSegmentDefaults)){
          this.updatePart();
      } else {
        this.verifyName().then(
          _success => {
            if ( _success && _success.length ) {
              this.form.setErrors({ 'invalid': true });
              this.snackBar.open('Esse nome já existe para essas configurações!', 'OK', {
                duration: 10000
              }); 
            } else {
              this.updatePart();
            }
          }
        ).catch(
          _error => {
            console.log(_error);
          }
        );
      }
      
    }

    

  }

  save() {
    // se for nulo, seta false
    if (!this.form.get('exclusive').value) {
      this.form.get('exclusive').setValue(false);
    }
    // UPLOAD
    if (this.selectedFile) {
      this.progress = true;
      this.upload()
        .then(success => {
          // console.log(success);
          this.form.get('picture').setValue(success);
          this.progress = false;
          this.createOrUpdate();
        })
        .catch(error => {
          const _error = JSON.parse(error.error);
          this.snackBar.open(_error[0].title ? _error[0].title : 'Falha ao fazer o upload do arquivo!',
            'OK', {
              duration: 10000
            });
          this.progress = false;
        });
    } else {
      this.createOrUpdate();
    }
  }

  createPart() {
    // send the color as object instead of value
    const part = this.form.value;
    this.dialogRef.close(part);
  }

  updatePart() {
    // send the color as object instead of value
    const part = this.form.value;
    part.id = this.defaults.id;
    this.dialogRef.close(part);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  loadModels(idFabricator) {
    this.apiModel.getByFabricatorUsingGET(idFabricator).subscribe(models => {
      this.models = models;
    });
  }

  fileChange(event) {
    if (event.target.files && event.target.files[0]) {
      this.compress(event);
    }
  }

  upload(): Promise<any> {
    const _uploadData = new FormData();
    _uploadData.append('File', this.selectedFile, this.selectedFile.name);

    const promise = this.http.post(environment.origin.parts + '/parts/upload', _uploadData, { responseType: 'text' })
      .toPromise();

    return promise;
  }

  onChange(value) {
    this.form.get('exclusive').setValue(value.checked);
  }

  clearFileSelected() {
    this.selectedFile = null;
    this.fileName = '';
    this.urlImg = '';
    this.form.get('picture').setValue('');
    // Este limpa o campo de seleção de arquivo para poder selecionar uma imagem com mesmo nome
    this.fileInput.nativeElement.value = '';
    this.fileSize = null;
  }

  compress(e) {
    const width = 200;
    const height = 200;
    const fileName = e.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event: any) => {
      const img = new Image();
      img.src = event.target.result;
      this.urlImg = event.target.result;
      img.onload = () => {
        const elem = document.createElement('canvas');
        elem.width = width;
        elem.height = height;
        const ctx = elem.getContext('2d');
        // img.width and img.height will give the original dimensions
        ctx.drawImage(img, 0, 0, width, height);
        ctx.canvas.toBlob((blob) => {
          const file = new File([blob], fileName, {
            type: 'image/jpeg',
            lastModified: Date.now()
          });
          // RESULTADO
          this.selectedFile = file;
          this.fileName = this.selectedFile.name;
          this.fileSize = this.selectedFile.size;
          //
        }, 'image/jpeg', 1);
      },
        reader.onerror = error => console.log(error);
    };
  }

  verifyName(): Promise<any> {
    const name = this.form.get('name').value;
    const serialNumber = this.form.get('serialNumber').value;
    const idCompany = this.form.get('idCompany').value;
    const idModel = this.form.get('idModel').value;
    const idSegment = this.form.get('idSegment').value;
    // se estiver nulo, volta
    // if (!name) { return Promise.reject(); }
    // se for igual ao anterior, volta também
    // if (name === this.defaults.name) { return Promise.resolve(true); }

    const promise = this.apiPart.getByNameUsingGET(name, serialNumber, idCompany, idModel, idSegment).
      toPromise();

    return promise;
  }

}

