
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Department } from 'app/models/departments/departments.model';
import { Area } from '../../../models/areas/areas.model';
import { AreaControllerService, DepartmentControllerService } from '../../../module/companies/';
import { isObject } from 'lodash-es';

@Component({
  selector: 'fury-department-create-update',
  templateUrl: './department-create-update.component.html',
  styleUrls: ['./department-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DepartmentCreateUpdateComponent implements OnInit {

  department: Department[];
  areas: Area[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<DepartmentCreateUpdateComponent>,
    private apiArea: AreaControllerService,
    private apiDepartment: DepartmentControllerService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
    // load the department
    this.apiArea.getAllUsingGET().
      subscribe(a => {
        this.areas = <Area[]>a;
      });

    // instance the form group for mode Update and Create
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      idArea: new FormControl(),
    });

  }

  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      // Used in the Update Mode to fill the fields
      if (!this.areas) { this.areas = [this.defaults.area]; }

      this.form = this.fb.group({
        id: [this.defaults.id || null],
        name: [this.defaults.name],
        idArea: [this.defaults.area.id]
      });

      // this.form.get("area").setValue(this.defaults.area);
    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as Department; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createDepartment();
    } else if (this.mode === 'update') {
      this.updateDepartment();
    }
  }

  createDepartment() {
    // send the color as object instead of value
    const department = this.form.value;
    this.dialogRef.close(department);
  }

  updateDepartment() {
    // send the color as object instead of value
    const department = this.form.value;
    department.id = this.defaults.id;
    this.dialogRef.close(department);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  verifyDepartment(e) {
    // se estiver nulo, volta
    if (!e) { return; }
    // se for igual ao anterior, volta também
    if (e === this.defaults.name) { return; }
    // isso é so pra deixar mais legível o que é 'e'

    const department = e;

    this.apiDepartment.getByNameUsingGET1(department).
      subscribe(_department => {
        if (_department.length) {
          this.form.get('name').setErrors({ 'invalid': true });
          this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
            duration: 10000
          });
        }
      });
  }

}

