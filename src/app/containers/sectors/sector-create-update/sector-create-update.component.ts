
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Sector } from 'app/models/sectors/sectors.model';
import { Department } from '../../../models/sectors/departments.model';
import { DepartmentControllerService, SectorControllerService } from '../../../module/companies';

@Component({
  selector: 'fury-sector-create-update',
  templateUrl: './sector-create-update.component.html',
  styleUrls: ['./sector-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SectorCreateUpdateComponent implements OnInit {

  sector: Sector[];
  departments: Department[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<SectorCreateUpdateComponent>,
    private apiDepartment: DepartmentControllerService,
    private apiSector: SectorControllerService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
    // load the sector
    this.apiDepartment.getAllUsingGET2().
      subscribe(dep => {
        this.departments = <Department[]>dep;
      });

    // instance the form group for mode Update and Create
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      idDepartment: new FormControl(),
    });

  }

  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      // Used in the Update Mode to fill the fields
      if (!this.departments) { this.departments = [this.defaults.department]; }

      this.form = this.fb.group({
        id: [this.defaults.id || null],
        name: [this.defaults.name],
        idDepartment: [this.defaults.department.id]
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as Sector; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createSector();
    } else if (this.mode === 'update') {
      this.updateSector();
    }
  }

  createSector() {
    // send the color as object instead of value
    const sector = this.form.value;
    this.dialogRef.close(sector);
  }

  updateSector() {
    // send the color as object instead of value
    const sector = this.form.value;
    sector.id = this.defaults.id;
    this.dialogRef.close(sector);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  verifySector(e) {
    // se estiver nulo, volta
    if (!e) { return; }
    // se for igual ao anterior, volta também
    if (e === this.defaults.name) { return; }
    // isso é so pra deixar mais legível o que é 'e'
    const sector = e;

    this.apiSector.getByNameUsingGET2(sector).
      subscribe(_sector => {
        if (_sector.length) {
          this.form.setErrors({ 'invalid': true });
          this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
            duration: 10000
          });
        }
      });
  }
}

