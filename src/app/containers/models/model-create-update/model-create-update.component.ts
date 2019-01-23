
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Model } from 'app/models/models/models.model';
import { Fabricator } from 'app/models/models/fabricators.model';
import { FabricatorControllerService } from 'app/module/fabricators';
import { ModelControllerService } from 'app/module/models';

@Component({
  selector: 'fury-model-create-update',
  templateUrl: './model-create-update.component.html',
  styleUrls: ['./model-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModelCreateUpdateComponent implements OnInit {

  model: Model[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  fabricators: Fabricator[];

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ModelCreateUpdateComponent>,
    private apiFabricator: FabricatorControllerService,
    private apiModel: ModelControllerService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) {
    // load the model
        this.apiFabricator.getAllUsingGET().
        subscribe(fab => {
                          this.fabricators =  <Fabricator[]>fab;
    });
    // instance the form group for mode Update and Create
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl({ value: '', disabled: true }, Validators.required),
      idFabricator: new FormControl(),
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
        idFabricator: [this.defaults.fabricator.id],
        idCompany: [this.defaults.idCompany]
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as Model; // takes blank :)
    }

  }

  createOrUpdate() {
    if (this.mode === 'create') {
      this.createModel();
    } else if (this.mode === 'update') {
      this.updateModel();
    }
  }

  removeSpaces() {
    const name = this.form.get('name').value;
    this.form.get('name').setValue(name.trim().replace(/\s{2,}/g, ' '));
  }

  save() {
    this.removeSpaces();

    this.verifyName().then(
      _success => {
        if (_success && _success.length) {
          this.form.get('name').setErrors({ 'invalid': true });
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

  createModel() {
    // send the color as object instead of value
    const model = this.form.value;
    this.dialogRef.close(model);
  }

  updateModel() {
    // send the color as object instead of value
    const model = this.form.value;
    model.id = this.defaults.id;
    this.dialogRef.close(model);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

 
  verifyName(): Promise<any> {
    const name = this.form.get('name').value,
      idFabricator = this.form.get('idFabricator').value;

    // se estiver nulo, volta
    if (!name) { return Promise.reject(); }
    // se for igual ao anterior, volta também
    if (name === this.defaults.name &&
      idFabricator == this.defaults.fabricator.id) { return Promise.resolve(true); }

    const data = {
      name: name,
      idCompany: this.form.get('idCompany').value,
      idFabricator: idFabricator,
    };

    const promise = this.apiModel.getByNameUsingPOST(data).
      toPromise();

    return promise;
  }

  onChanges() {
    if (this.form.get('idFabricator').value) {
      this.form.get('idCompany').setValue(1);
      this.form.get('name').enable();
    } else {
      this.form.get('name').reset();
      this.form.get('name').disable();
    }
  }
}

