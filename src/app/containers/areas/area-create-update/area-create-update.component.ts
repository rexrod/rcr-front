import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Area } from 'app/models/areas/areas.model';
import { AreaControllerService } from 'app/module/companies';

@Component({
  selector: 'fury-area-create-update',
  templateUrl: './area-create-update.component.html',
  styleUrls: ['./area-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AreaCreateUpdateComponent implements OnInit {

  area: Area[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<AreaCreateUpdateComponent>,
    private apiArea: AreaControllerService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
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
      // console.log(this.defaults)
      // Used in the Update Mode to fill the fields
      this.form = this.fb.group({
        id: [this.defaults.id || null],
        name: [this.defaults.name],
        idCompany: [this.defaults.company.id]
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as Area; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createArea();
    } else if (this.mode === 'update') {
      this.updateArea();
    }
  }

  createArea() {
    // ID FIXO PQ AINDA NÃO TEM USUARIO LOGADO
    this.form.controls['idCompany'].setValue(1);
    // send the color as object instead of value
    const area = this.form.value;
    this.dialogRef.close(area);
  }

  updateArea() {
    // send the color as object instead of value
    const area = this.form.value;
    area.id = this.defaults.id;
    this.dialogRef.close(area);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  verifyArea(e) {
    // se estiver nulo, volta
    if (!e) { return; }
    // se for igual ao anterior, volta também
    if (e === this.defaults.name) { return; }
    // isso é so pra deixar mais legível o que é 'e'
    const area = e;

    this.apiArea.getByNameUsingGET(area).
      subscribe(_area => {
        if (_area.length) {
          this.form.get('name').setErrors({ 'invalid': true });
          this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
            duration: 10000
          });
        }
      });
  }

}
