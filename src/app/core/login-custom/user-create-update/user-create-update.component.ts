
import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, ErrorStateMatcher } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { User } from 'app/models/users/users.model';
import { SectorControllerService } from 'app/module/companies';
import { Sector } from 'app/models/users/sectors.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Promise } from 'q';
import { UserControllerService } from 'app/module/users';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'fury-user-create-update',
  templateUrl: './user-create-update.component.html',
  styleUrls: ['./user-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserCreateUpdateCustomComponent implements OnInit {

  user: User[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  sectors: Sector[];
  matcher = new MyErrorStateMatcher();
  selectedFile: File; // hold our file
  progress = false;
  @ViewChild('fileInput') fileInput: ElementRef;
  urlImg = '';
  fileName = '';
  fileSize: number;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<UserCreateUpdateCustomComponent>,
    private apiSector: SectorControllerService,
    private apiUser: UserControllerService,
    public snackBar: MatSnackBar,
    private http: HttpClient,
    private fb: FormBuilder) {
    // load the user
    // this.apiSector.getAllUsingGET3().
    //   subscribe(sec => {
    //     this.sectors = <Sector[]>sec;
    //   });
    // instance the form group for mode Update and Create
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      registration: new FormControl(), //{ value: '', disabled: true }),
      status: new FormControl(),
    });
  }

  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      // Used in the Update Mode to fill the fields
      this.form = new FormGroup({
        id: new FormControl(this.defaults.id, Validators.required),
        name: new FormControl(this.defaults.name, Validators.required),
        email: new FormControl(this.defaults.email, Validators.required),
        password: new FormControl(this.defaults.password),
        // registration: new FormControl({ value: this.defaults.registration, disabled: true }, Validators.required),
        registration: new FormControl(this.defaults.registration, Validators.required),
        status: new FormControl(this.defaults.status),
      });
    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as User; // takes blank :)
    }

  }

  createOrUpdate() {
    if (this.mode === 'create') {

      // this.verifyName().then(
      //   _success => {
      //     // console.log(_success);
      //     if (typeof _success !== 'undefined' && _success.length > 0) {
      //     // if ( _success ) {
      //       this.form.setErrors({ 'invalid': true });
      //       this.snackBar.open('Esse nome já existe para essas configurações!', 'OK', {
      //         duration: 10000
      //       });
      //     } else {
      //       this.createPart();
      //     }
      //   }
      // ).catch(
      //   _error => {
      //     console.log(_error);
      //   }
      // );
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
        (name === nameDefaults) &&
        (serialNumber === serialNumberDefaults) &&
        (idCompany === idCompanyDefaults) &&
        (idModel === idModelDefaults) &&
        (idSegment === idSegmentDefaults)) {
        this.updateUser();
      } else {
        // this.verifyName().then(
        //   _success => {
        //     if ( _success ) {
        //       this.form.setErrors({ 'invalid': true });
        //       this.snackBar.open('Esse nome já existe para essas configurações!', 'OK', {
        //         duration: 10000
        //       }); 
        //     } else {
        //       this.updateUser();
        //     }
        //   }
        // ).catch(
        //   _error => {
        //     console.log(_error);
        //   }
        // );
      }

    }

  }

  saveCustom(){
    if (this.mode === 'create') {
      this.createUser();
    } else if (this.mode === 'update') {
      this.updateUser();
    }
  }

  save() {
    // Verificar se a senha tem letras e numeros
    if (this.verifyPassword()) {
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
    } else {
      this.form.get('password').setErrors({ 'invalid': true });
    }

    return;

  }

  createUser() {
    // send the color as object instead of value
    const user = this.form.value;
    this.dialogRef.close(user);
  }

  updateUser() {
    // send the color as object instead of value
    const user = this.form.value;
    user.id = this.defaults.id;
    this.dialogRef.close(user);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  fileChange(event) {
    if (event.target.files && event.target.files[0]) {
      this.compress(event);
    }
  }

  upload(): Promise<any> {
    const _uploadData = new FormData();
    _uploadData.append('File', this.selectedFile, this.selectedFile.name);

    const promise = <any>this.http.post(environment.origin.parts + '/parts/upload', _uploadData, { responseType: 'text' })
      .toPromise();

    return promise;
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
  verifyEmail(){
  // verifyEmail(): Promise<any> {
    const name = this.form.get('name').value;
    const serialNumber = this.form.get('serialNumber').value;
    const idCompany = this.form.get('idCompany').value;
    const idModel = this.form.get('idModel').value;
    const idSegment = this.form.get('idSegment').value;
    // se estiver nulo, volta
    // if (!name) { return Promise.reject(); }
    // se for igual ao anterior, volta também
    // if (name === this.defaults.name) { return Promise.resolve(true); }

    // const promise = this.apiUser.getByNameUsingGET(name, serialNumber, idCompany, idModel, idSegment).
    //   toPromise();

    // return <any>promise;

  }

  loginValue(value) {
    if (!value) { return; }
    value = value.split('@');
    this.form.get('login').setValue(value[0]);
  }

  verifyPassword() {
    const password = this.form.get('password').value;
    const letters = password.match(/[a-zA-Z]/);
    const numbers = password.match(/[0-9]/);

    return letters && numbers;

  }

}

