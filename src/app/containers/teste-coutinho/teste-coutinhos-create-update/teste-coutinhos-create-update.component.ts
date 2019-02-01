
import { Component, Inject, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { TesteCoutinhos } from 'app/models/teste-coutinho/teste-coutinho.model';

@Component({
  selector: 'fury-teste-coutinhos-create-update',
  templateUrl: './teste-coutinhos-create-update.component.html',
  styleUrls: ['./teste-coutinhos-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TesteCoutinhosCreateUpdateComponent implements OnInit {

  testeCoutinhos: TesteCoutinhos[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<TesteCoutinhosCreateUpdateComponent>,
             // private apiTesteCoutinhos: TesteCoutinhosControllerService,
              private fb: FormBuilder) {
                // load the teste-coutinhos
            //     this.apiTesteCoutinhos. getAllUsingGET1().
            //     subscribe(noti => {
            //                       this.teste-coutinhos =  <TesteCoutinhos[]>noti;
            // });
            // instance the form group for mode Update and Create
            this.form = new FormGroup({
              id: new FormControl(),
              name: new FormControl()
            });

  }

  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      // Used in the Update Mode to fill the fields
      this.form = this.fb.group({
        id: [this.defaults.id || null],
        name: [this.defaults.name],
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as TesteCoutinhos; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createTesteCoutinhos();
    } else if (this.mode === 'update') {
      this.updateTesteCoutinhos();
    }
  }

  createTesteCoutinhos() {
    // send the color as object instead of value
    const testeCoutinhos = this.form.value;
    this.dialogRef.close(testeCoutinhos);
  }

  updateTesteCoutinhos() {
    // send the color as object instead of value
    const testeCoutinhos = this.form.value;
    testeCoutinhos.id = this.defaults.id;
    this.dialogRef.close(testeCoutinhos);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

}

