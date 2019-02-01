
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { ServiceOrderType } from 'app/models/service-order-types/service-order-types.model';
import { ServiceOrderTypeControllerService } from '../../../module/service-order-types';

@Component({
  selector: 'fury-service-order-type-create-update',
  templateUrl: './service-order-type-create-update.component.html',
  styleUrls: ['./service-order-type-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServiceOrderTypeCreateUpdateComponent implements OnInit {

  serviceOrderType: ServiceOrderType[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ServiceOrderTypeCreateUpdateComponent>,
    private apiServiceOrderType: ServiceOrderTypeControllerService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
    // load the serviceOrderType
    //     this.apiServiceOrderType. getAllUsingGET1().
    //     subscribe(noti => {
    //                       this.serviceOrderType =  <ServiceOrderType[]>noti;
    // });
    // instance the form group for mode Update and Create
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      idCompany: new FormControl(),
    });

  }

  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      // Used in the Update Mode to fill the fields
      this.form = this.fb.group({
        id: [this.defaults.id || null],
        name: [this.defaults.name],
        idCompany: [this.defaults.company.id]
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as ServiceOrderType; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createServiceOrderType();
    } else if (this.mode === 'update') {
      this.updateServiceOrderType();
    }
  }

  createServiceOrderType() {
    // ID FIXO PQ AINDA NÃO TEM USUARIO LOGADO
    this.form.controls['idCompany'].setValue(1);
    // send the color as object instead of value
    const serviceOrderType = this.form.value;
    this.dialogRef.close(serviceOrderType);
  }

  updateServiceOrderType() {
    // send the color as object instead of value
    const serviceOrderType = this.form.value;
    serviceOrderType.id = this.defaults.id;
    this.dialogRef.close(serviceOrderType);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  verifyTypes(e) {
    // se estiver nulo, volta
    if (!e) { return; }
    // se for igual ao anterior, volta também
    if (e === this.defaults.name) { return; }
    // isso é so pra deixar mais legível o que é 'e'
    const types = e;
    // O IDCOMPANY È FIXO PQ NAO TEM LOGIN AINDA
    this.apiServiceOrderType.getByNameUsingGET(1, types).
      subscribe(_types => {
        if (_types.length) {
          this.form.setErrors({ 'invalid': true });
          this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
            duration: 10000
          });
        }
      });
  }
}

