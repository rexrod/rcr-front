
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Material } from 'app/models/materials/materials.model';
import { SegmentControllerService } from 'app/module/segments';
import { FabricatorControllerService } from 'app/module/fabricators';
import { ModelControllerService } from 'app/module/models';
import { SectorControllerService } from 'app/module/companies';
import { Segment } from 'app/models/materials/segments.model';
import { Fabricator } from 'app/models/materials/fabricators.model';
import { Model } from 'app/models/materials/models.model';
import { Sector } from 'app/models/materials/sectors.model';
import { MaterialControllerService } from 'app/module/materials';

@Component({
  selector: 'fury-material-create-update',
  templateUrl: './material-create-update.component.html',
  styleUrls: ['./material-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MaterialCreateUpdateComponent implements OnInit {

  material: Material[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  segments: Segment[];
  fabricators: Fabricator[];
  models: Model[];
  sectors: Sector[];
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<MaterialCreateUpdateComponent>,
    private apiSegment: SegmentControllerService,
    private apiFabricator: FabricatorControllerService,
    private apiModel: ModelControllerService,
    private apiSector: SectorControllerService,
    private apiMaterial: MaterialControllerService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
    // load the segments
    this.apiSegment.getAllUsingGET().
      subscribe(seg => {
        this.segments = <Segment[]>seg;
      });
    // load the segments
    // O ID È FIXO PQ AINDA NÂO TEM LOGIN
    this.apiFabricator.getFabricatorWithModelUsingGET(1).
      subscribe(fab => {
        this.fabricators = <Fabricator[]>fab;
      });
    // load the segments
    this.apiSector.getAllUsingGET3().
      subscribe(sec => {
        this.sectors = <Sector[]>sec;
      });
    // instance the form group for mode Update and Create
    this.firstFormGroup = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      address: new FormControl(),
      idCompany: new FormControl(1),
    });

    this.secondFormGroup = new FormGroup({
      idSegment: new FormControl(),
      idFabricator: new FormControl(),
      idModel: new FormControl(),
      idSector: new FormControl(),
    });

    this.thirdFormGroup = new FormGroup({
      realQuantity: new FormControl(),
      maximumQuantity: new FormControl(),
      minimumQuantity: new FormControl(),
    });

    this.fourthFormGroup = new FormGroup({
      sinergiCode: new FormControl(),
      sinergiValue: new FormControl(),
    });

  }

  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';

      this.loadModels(this.defaults.fabricator.id);

      this.firstFormGroup = this.fb.group({
        id: [this.defaults.id || null],
        name: [this.defaults.name],
        address: [this.defaults.address],
        idCompany: [this.defaults.company.id],
      });

      this.secondFormGroup = this.fb.group({
        idSegment: [this.defaults.segment.id],
        idFabricator: [this.defaults.fabricator.id],
        idModel: [this.defaults.model.id],
        idSector: [this.defaults.sector.id],
      });

      this.thirdFormGroup = this.fb.group({
        realQuantity: [this.defaults.realQuantity],
        maximumQuantity: [this.defaults.maximumQuantity],
        minimumQuantity: [this.defaults.minimumQuantity],
      });

      this.fourthFormGroup = this.fb.group({
        sinergiCode: [this.defaults.sinergiCode],
        sinergiValue: [this.defaults.sinergiValue],
      });
 
    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as Material; // takes blank :)
    }

  }

  loadModels(idFabricator) {
    this.apiModel.getByFabricatorUsingGET(idFabricator).subscribe(models => {
      this.models = models;
    });
  }

  createOrUpdate(){
    if (this.mode === 'create') {
      this.createMaterial();
    } else if (this.mode === 'update') {
      this.updateMaterial();
    }
  }

  save() {
    // troca ',' por '.'
    let sinergiValue = this.fourthFormGroup.get('sinergiValue').value;
    sinergiValue =  sinergiValue.toString().replace(',','.');
    this.fourthFormGroup.get('sinergiValue').setValue(sinergiValue);

    this.verifyName().then(
      _success => {
          if (_success && _success.length) {
            this.firstFormGroup.get('name').setErrors({ 'invalid': true });
            this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
              duration: 10000
            });
          } else {
            this.createOrUpdate();
          }
        }
    ).catch(
      _error => {
        console.log(_error);
      }
    );

  }

  createMaterial() {
    const form1 = this.firstFormGroup.value;
    const form2 = this.secondFormGroup.value;
    const form3 = this.thirdFormGroup.value;
    const form4 = this.fourthFormGroup.value;
    const material = Object.assign(form1, form2, form3, form4);
    this.dialogRef.close(material);
  }

  updateMaterial() {
    const form1 = this.firstFormGroup.value;
    const form2 = this.secondFormGroup.value;
    const form3 = this.thirdFormGroup.value;
    const form4 = this.fourthFormGroup.value;
    const material = Object.assign(form1, form2, form3, form4);
    material.id = this.defaults.id;
    this.dialogRef.close(material);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  verifyName(): Promise<any> {
    const name = this.firstFormGroup.get('name').value;

    // se estiver nulo, volta
    if (!name) { return Promise.reject(); }
    // se for igual ao anterior, volta também
    if (name === this.defaults.name) { return Promise.resolve(true); }
    
    const data = {
      name: name,
      idCompany: this.firstFormGroup.get('idCompany').value,
      idModel: this.secondFormGroup.get('idModel').value,
      idSector: this.secondFormGroup.get('idSector').value,
      idSegment: this.secondFormGroup.get('idSegment').value,
    };

    const promise = this.apiMaterial.getByNameUsingPOST(data).
      toPromise();

    return promise;
  }
}

