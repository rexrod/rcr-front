
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Segment } from 'app/models/segments/segments.model';
import { SegmentControllerService } from '../../../module/segments';

@Component({
  selector: 'fury-segment-create-update',
  templateUrl: './segment-create-update.component.html',
  styleUrls: ['./segment-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SegmentCreateUpdateComponent implements OnInit {

  segment: Segment[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<SegmentCreateUpdateComponent>,
    private apiSegment: SegmentControllerService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
    // load the segment
    //     this.apiSegment. getAllUsingGET1().
    //     subscribe(noti => {
    //                       this.segment =  <Segment[]>noti;
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
      this.defaults = {} as Segment; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createSegment();
    } else if (this.mode === 'update') {
      this.updateSegment();
    }
  }

  createSegment() {
    // ID FIXO PQ AINDA NÃO TEM USUARIO LOGADO
    this.form.controls['idCompany'].setValue(1);
    // send the color as object instead of value
    const segment = this.form.value;
    this.dialogRef.close(segment);
  }

  updateSegment() {
    // send the color as object instead of value
    const segment = this.form.value;
    segment.id = this.defaults.id;
    this.dialogRef.close(segment);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  verifySegment(e) {
    // se estiver nulo, volta
    if (!e) { return; }
    // se for igual ao anterior, volta também
    if (e === this.defaults.name) { return; }
    // isso é so pra deixar mais legível o que é 'e'
    const segment = e;
    // O IDCOMPANY È FIXO PQ NAO TEM LOGIN AINDA
    this.apiSegment.getByNameUsingGET(1, segment).
      subscribe(_segment => {
        if (_segment.length) {
          this.form.setErrors({ 'invalid': true });
          this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
            duration: 10000
          });
        }
      });
  }

}

