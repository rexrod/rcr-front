
import { Component, Inject, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Employees } from 'app/models/employees/employees.model';

@Component({
  selector: 'fury-employee-create-update',
  templateUrl: './employee-create-update.component.html',
  styleUrls: ['./employee-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesCreateUpdateComponent implements OnInit {

  employees: Employees[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<EmployeesCreateUpdateComponent>,
             // private apiRastreador: RastreadorControllerService,
              private fb: FormBuilder) {
                // load the rastreador
            //     this.apiRastreador. getAllUsingGET1().
            //     subscribe(noti => {
            //                       this.rastreador =  <Rastreador[]>noti;
            // });
            // instance the form group for mode Update and Create
            this.form = new FormGroup({
              id: new FormControl(),
              status: new FormControl(),
              name: new FormControl(),
              address: new FormControl(),
              company: new FormControl(),
            });
  }
  
  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      // Used in the Update Mode to fill the fields
      this.form = this.fb.group({
        id: [this.defaults.id || null],
        status: [this.defaults.status],
        name: [this.defaults.name],
        address: [this.defaults.address],
        company: [this.defaults.company],
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as Employees; // takes blank :)
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

