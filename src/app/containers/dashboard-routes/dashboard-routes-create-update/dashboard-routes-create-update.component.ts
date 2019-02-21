
import { Component, Inject, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { DashboardRoutes } from 'app/models/dashboard-routes/dashboard-routes.model';

@Component({
  selector: 'fury-dashboard-routes-create-update',
  templateUrl: './dashboard-routes-create-update.component.html',
  styleUrls: ['./dashboard-routes-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardRoutesCreateUpdateComponent implements OnInit {

  dashboardLive: DashboardRoutes[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<DashboardRoutesCreateUpdateComponent>,
             // private apiDashboardLive: DashboardLiveControllerService,
              private fb: FormBuilder) {
                // load the dashboard-live
            //     this.apiDashboardLive. getAllUsingGET1().
            //     subscribe(noti => {
            //                       this.dashboard-live =  <DashboardLive[]>noti;
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
      this.defaults = {} as DashboardRoutes; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createDashboardLive();
    } else if (this.mode === 'update') {
      this.updateDashboardLive();
    }
  }

  createDashboardLive() {
    // send the color as object instead of value
    const dashboardLive = this.form.value;
    this.dialogRef.close(dashboardLive);
  }

  updateDashboardLive() {
    // send the color as object instead of value
    const dashboardLive = this.form.value;
    dashboardLive.id = this.defaults.id;
    this.dialogRef.close(dashboardLive);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

}

