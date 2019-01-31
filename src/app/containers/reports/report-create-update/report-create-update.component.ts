
import { Component, Inject, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Report } from 'app/models/reports/reports.model';

@Component({
  selector: 'fury-report-create-update',
  templateUrl: './report-create-update.component.html',
  styleUrls: ['./report-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportCreateUpdateComponent implements OnInit {

  report: Report[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<ReportCreateUpdateComponent>,
             // private apiReport: ReportControllerService,
              private fb: FormBuilder) {
                // load the report
            //     this.apiReport. getAllUsingGET1().
            //     subscribe(noti => {
            //                       this.report =  <Report[]>noti;
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
      this.defaults = {} as Report; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createReport();
    } else if (this.mode === 'update') {
      this.updateReport();
    }
  }

  createReport() {
    // send the color as object instead of value
    const report = this.form.value;
    this.dialogRef.close(report);
  }

  updateReport() {
    // send the color as object instead of value
    const report = this.form.value;
    report.id = this.defaults.id;
    this.dialogRef.close(report);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

}

