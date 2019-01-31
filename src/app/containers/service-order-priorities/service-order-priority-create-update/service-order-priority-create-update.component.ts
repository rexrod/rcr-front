
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { ServiceOrderPriority } from 'app/models/service-orders/service-order-priorities.model';
import { SCHEMA } from '../service-order-priorities.schema';
import { ServiceOrderPriorityControllerService } from 'app/module/service-orders';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Color } from 'app/models/service-orders/colors.model';

@Component({
  selector: 'fury-service-order-priority-create-update',
  templateUrl: './service-order-priority-create-update.component.html',
  styleUrls: ['./service-order-priority-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServiceOrderPriorityCreateUpdateComponent implements OnInit {

  schema = SCHEMA;
  serviceOrderPriority: ServiceOrderPriority[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  properties: any;
  colors: Color[] = [
    { id: '#F7EE10', name: 'Amarelo', level: 1 },
    { id: '#F7B010', name: 'Laranja', level: 2 },
    { id: '#B10707', name: 'Vermelho', level: 3 },
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ServiceOrderPriorityCreateUpdateComponent>,
    private apiServiceOrderPriority: ServiceOrderPriorityControllerService,
    public snackBar: MatSnackBar,
    private http: HttpClient,
    private fb: FormBuilder) {
    // instance the form group for mode Update and Create
    const group: any = {};
    Object.keys(this.schema.properties).forEach(property => {
      if (this.schema.properties[property].isModelProperty) {
        group[property] = new FormControl(this.schema.properties[property].value || '');
      }
    });
    this.form = new FormGroup(group);

    const properties: any = [];
    Object.keys(this.schema.properties).map(property => {
      if (!this.schema.properties[property].isForm) { return false; }
      properties.push({
        property,
        description: this.schema.properties[property].description,
        pattern: this.schema.properties[property].pattern || '',
        minlength: this.schema.properties[property].minlength,
        maxlength: this.schema.properties[property].maxlength,
        type: this.schema.properties[property].type,
        required: this.schema.properties[property].required,
      });
    });
    this.properties = properties;
    // console.log(this.properties);
    // console.log(this.form);
    // console.log(group);

  }

  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      const group: any = {};

      Object.keys(this.schema.properties).forEach(property => {
        const updateValue = this.schema.properties[property].updateValue;

        if (this.schema.properties[property].isModelProperty) {
          // console.log(property); return;
          if (updateValue) {
            group[property] = [this.extractValue(this.defaults[updateValue.split('.')[0]], updateValue, property)];
          } else {
            group[property] = [this.defaults[property]];
          }
        }
      });
      // console.log(group);
      // this.form = new FormGroup(group);
      // Used in the Update Mode to fill the fields
      this.form = this.fb.group(group);

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as ServiceOrderPriority; // takes blank :)
    }

  }

  createOrUpdate() {
    // Get level value
    const obj = this.colors[this.colors.findIndex(l => l.id === this.form.get('color').value)];
    this.form.get('level').setValue(obj.level);
    
    if (this.mode === 'create') {
      this.createServiceOrderPriority();
    } else if (this.mode === 'update') {
      this.updateServiceOrderPriority();
    }
  }

  save() {
    // campos para checar se o nome existe
    let namesToVerify = [];
    Object.keys(this.schema.properties).forEach(property => {
      const flag = this.schema.properties[property].verifyName;
      if (flag) {
        namesToVerify.push({
          property,
          data: this.schema.properties[property].verifyName.data,
          url: this.schema.properties[property].verifyName.url,
          // method: this.schema.properties[property].verifyName.method,
        });
      }
      // }
    });
    // se existir, verifica, senão chama o create ou update
    if (namesToVerify.length) {
      let error = namesToVerify.length;
      for (const item in namesToVerify) {
        this.verifyName(namesToVerify[item].data, namesToVerify[item].url).then(
          _success => {
            const propertyDefault = this.defaults[namesToVerify[item].property];
            const propertyReturn = _success.length ? _success[0][namesToVerify[item].property] : false;
            // se o nome não for igual ao nome de atualização e retornar nome igual da consulta...
            if (!(propertyDefault === propertyReturn) && _success.length) {
              this.form.get(namesToVerify[item].property).setErrors({ 'invalid': true });
              this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
                duration: 10000
              });
            } else {
              error--;
            }
            if (error === 0) {
              this.createOrUpdate();
            }
          }).catch(
            error => {
              console.log(namesToVerify[item].property);
              console.log(error);
            });
      }
    } else {
      this.createOrUpdate();
    }

  }

  createServiceOrderPriority() {
    // send the color as object instead of value
    const serviceOrderPriority = this.form.value;
    this.dialogRef.close(serviceOrderPriority);
  }

  updateServiceOrderPriority() {
    // send the color as object instead of value
    const serviceOrderPriority = this.form.value;
    serviceOrderPriority.id = this.defaults.id;
    this.dialogRef.close(serviceOrderPriority);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  extractValue(_row, _cell, _property) {

    if (typeof (_cell) === 'undefined') {
      return _row[_property];
    }

    let result = _row;

    const properties = _cell.split('.');

    properties.forEach(p => {
      result = result[p] ? result[p] : result;
    });

    return result;
  }

  verifyName(_data, _url): Promise<any> {
    const values = {};
    console.log(_data);
    for (const field in _data) {
      values[_data[field]] = this.form.get(_data[field]).value;
    }
    const promise = this.http.post(environment.origin.serviceOrders + _url, values)
      .toPromise();

    return promise;
  }

}

