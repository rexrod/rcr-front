
import { Component, Inject, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Route } from 'app/models/routes/routes.model';

@Component({
  selector: 'fury-route-create-update',
  templateUrl: './route-create-update.component.html',
  styleUrls: ['./route-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RouteCreateUpdateComponent implements OnInit {

  route: Route[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<RouteCreateUpdateComponent>,
             // private apiRoute: RouteControllerService,
              private fb: FormBuilder) {
                // load the route
            //     this.apiRoute. getAllUsingGET1().
            //     subscribe(noti => {
            //                       this.route =  <Route[]>noti;
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
      this.defaults = {} as Route; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createRoute();
    } else if (this.mode === 'update') {
      this.updateRoute();
    }
  }

  createRoute() {
    // send the color as object instead of value
    const route = this.form.value;
    this.dialogRef.close(route);
  }

  updateRoute() {
    // send the color as object instead of value
    const route = this.form.value;
    route.id = this.defaults.id;
    this.dialogRef.close(route);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

}

