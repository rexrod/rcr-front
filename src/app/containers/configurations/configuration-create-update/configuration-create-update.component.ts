
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Configuration } from 'app/models/configurations/configurations.model';

@Component({
  selector: 'fury-configuration-create-update',
  templateUrl: './configuration-create-update.component.html',
  styleUrls: ['./configuration-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigurationCreateUpdateComponent implements OnInit {

  configuration: Configuration[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ConfigurationCreateUpdateComponent>,
    // private apiConfiguration: ConfigurationControllerService,
    private fb: FormBuilder) {
    // load the configuration
    //     this.apiConfiguration. getAllUsingGET1().
    //     subscribe(noti => {
    //                       this.configuration =  <Configuration[]>noti;
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
      this.defaults = {} as Configuration; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createConfiguration();
    } else if (this.mode === 'update') {
      this.updateConfiguration();
    }
  }

  createConfiguration() {
    // send the color as object instead of value
    const configuration = this.form.value;
    this.dialogRef.close(configuration);
  }

  updateConfiguration() {
    // send the color as object instead of value
    const configuration = this.form.value;
    configuration.id = this.defaults.id;
    this.dialogRef.close(configuration);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

}

