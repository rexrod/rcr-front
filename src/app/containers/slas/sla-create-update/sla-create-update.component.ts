
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Sla } from 'app/models/slas/slas.model';
import { SlaControllerService } from 'app/module/slas';

import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'fury-sla-create-update',
  templateUrl: './sla-create-update.component.html',
  styleUrls: ['./sla-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlaCreateUpdateComponent implements OnInit {

  sla: Sla[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  matcher = new MyErrorStateMatcher();

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<SlaCreateUpdateComponent>,
    private apiSla: SlaControllerService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
    // load the sla
    //     this.apiSla. getAllUsingGET1().
    //     subscribe(noti => {
    //                       this.sla =  <Sla[]>noti;
    // });
    // instance the form group for mode Update and Create
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [
        Validators.required,
      ]),
      time: new FormControl(),
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
        time: [this.defaults.time],
        idCompany: [this.defaults.company.id]
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as Sla; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createSla();
    } else if (this.mode === 'update') {
      this.updateSla();
    }
  }

  createSla() {
    // ID FIXO PQ AINDA NÃO TEM USUARIO LOGADO
    this.form.controls['idCompany'].setValue(1);
    // send the color as object instead of value
    const sla = this.form.value;
    this.dialogRef.close(sla);
  }

  updateSla() {
    // send the color as object instead of value
    const sla = this.form.value;
    sla.id = this.defaults.id;
    this.dialogRef.close(sla);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  verifySla(e) {
    // se estiver nulo, volta
    if (!e) { return; }
    // se for igual ao anterior, volta também
    if (e === this.defaults.name) { return; }
    // isso é so pra deixar mais legível o que é 'e'

    const field = e;

    this.apiSla.getByNameUsingGET(1, field).
      subscribe(_field => {
        if (_field.length) {
          this.form.get('name').setErrors({ 'invalid': true });
          this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
            duration: 10000
          });
        }
      });
  }

}

