
import { Component, Inject, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { MeasureUnit } from 'app/models/measures-units/measures-units.model';
import { MeasuresUnitControllerService } from 'app/module/measures-units';

@Component({
  selector: 'fury-measure-unit-create-update',
  templateUrl: './measure-unit-create-update.component.html',
  styleUrls: ['./measure-unit-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MeasureUnitCreateUpdateComponent implements OnInit {

  measureUnit: MeasureUnit[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<MeasureUnitCreateUpdateComponent>,
              public snackBar: MatSnackBar,
             private apiMeasureUnit: MeasuresUnitControllerService,
              private fb: FormBuilder) {

            // instance the form group for mode Update and Create
            this.form = new FormGroup({
              id: new FormControl(),
              name: new FormControl(),
              initials: new FormControl(),
              // É FIXO PQ AINDA NÂO TEM LOGIN
              idCompany: new FormControl(1)
            });

  }

  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      // Used in the Update Mode to fill the fields
      this.form = this.fb.group({
        id: [this.defaults.id || null],
        name: [this.defaults.name],
        initials: [this.defaults.initials],
        idCompany: [this.defaults.idCompany]
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as MeasureUnit; // takes blank :)
    }

  }

  createOrUpdate() {
    if (this.mode === 'create') {
      this.createMeasureUnit();
    } else if (this.mode === 'update') {
      this.updateMeasureUnit();
    }
  }

  removeSpaces(){
    const name = this.form.get('name').value;
    const initials = this.form.get('initials').value;
    this.form.get('name').setValue(name.replace(/\s*/g,''));
    this.form.get('initials').setValue(initials.replace(/\s*/g,''));
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
          this.verifyInitials().then(
            _success => {
              if (_success && _success.length) {
                this.form.get('initials').setErrors({ 'invalid': true });
                this.snackBar.open('Essa sigla já existe! Tente outra.', 'OK', {
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
      }
    ).catch(
      _error => {
        console.log(_error);
      }
    );
  }

  createMeasureUnit() {
    // send the color as object instead of value
    const measureUnit = this.form.value;
    this.dialogRef.close(measureUnit);
  }

  updateMeasureUnit() {
    // send the color as object instead of value
    const measureUnit = this.form.value;
    measureUnit.id = this.defaults.id;
    this.dialogRef.close(measureUnit);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  verifyName(): Promise<any> {
    const name = this.form.get('name').value;

    // se estiver nulo, volta
    if (!name) { return Promise.reject(); }
    // se for igual ao anterior, volta também
    if (name === this.defaults.name) { return Promise.resolve(true); }

    const data = {
      name: name,
      idCompany: this.form.get('idCompany').value,
    };

    const promise = this.apiMeasureUnit.getByNameUsingPOST(data).
      toPromise();

    return promise;
  }


  verifyInitials(): Promise<any> {
    const initials = this.form.get('initials').value;

    // se estiver nulo, volta
    if (!initials) { return Promise.reject(); }
    // se for igual ao anterior, volta também
    if (initials === this.defaults.initials) { return Promise.resolve(true); }

    const data = {
      initials: initials,
      idCompany: this.form.get('idCompany').value,
    };

    const promise = this.apiMeasureUnit.getByInitialsUsingPOST(data).
      toPromise();

    return promise;
  }
}

