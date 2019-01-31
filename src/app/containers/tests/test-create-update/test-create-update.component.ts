
import { Component, Inject, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Test } from 'app/models/tests/tests.model';

@Component({
  selector: 'fury-test-create-update',
  templateUrl: './test-create-update.component.html',
  styleUrls: ['./test-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestCreateUpdateComponent implements OnInit {

  test: Test[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<TestCreateUpdateComponent>,
             // private apiTest: TestControllerService,
              private fb: FormBuilder) {
                // load the test
            //     this.apiTest. getAllUsingGET1().
            //     subscribe(noti => {
            //                       this.test =  <Test[]>noti;
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
      this.defaults = {} as Test; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createTest();
    } else if (this.mode === 'update') {
      this.updateTest();
    }
  }

  createTest() {
    // send the color as object instead of value
    const test = this.form.value;
    this.dialogRef.close(test);
  }

  updateTest() {
    // send the color as object instead of value
    const test = this.form.value;
    test.id = this.defaults.id;
    this.dialogRef.close(test);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

}

