
import { Component, Inject, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Rastreador } from 'app/models/rastreadores/rastreadores.model';

@Component({
  selector: 'fury-rastreador-create-update',
  templateUrl: './rastreador-create-update.component.html',
  styleUrls: ['./rastreador-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RastreadorCreateUpdateComponent implements OnInit {

  rastreador: Rastreador[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<RastreadorCreateUpdateComponent>,
             // private apiRastreador: RastreadorControllerService,
              private fb: FormBuilder) {
                // load the rastreador
            //     this.apiRastreador. getAllUsingGET1().
            //     subscribe(noti => {
            //                       this.rastreador =  <Rastreador[]>noti;
            // });
            // instance the form group for mode Update and Create
            this.form = new FormGroup({
              _id: new FormControl(),
              serialKey: new FormControl(),
              trackerModel: new FormControl(),
              notes: new FormControl()
            });
  }

  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      // Used in the Update Mode to fill the fields
      this.form = this.fb.group({
        _id: [this.defaults._id || null],
        serialKey: [this.defaults.serialKey],
        trackerModel: [this.defaults.trackerModel],
        notes: [this.defaults.notes],
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as Rastreador; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createRastreador();
    } else if (this.mode === 'update') {
      this.updateRastreador();
    }
  }

  createRastreador() {
    // send the color as object instead of value
    const rastreador = this.form.value;
    this.dialogRef.close(rastreador);
  }

  updateRastreador() {
    // send the color as object instead of value
    const rastreador = this.form.value;
    rastreador.id = this.defaults.id;
    this.dialogRef.close(rastreador);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

}

