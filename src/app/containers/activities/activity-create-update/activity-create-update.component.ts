
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Activity } from 'app/models/activities/activities.model';
import { Team } from 'app/models/activities/teams.model';
import { Periodicity } from 'app/models/activities/periodicities.model';
import { ServiceOrderTypeControllerService } from 'app/module/service-order-types';
import { ServiceOrderType } from 'app/models/activities/serviceOrderTypes.models';
import { SnackBarComponent } from 'app/demo/components/snack-bar/snack-bar.component';
import { Observable } from 'rxjs';
import { ActivityControllerService, TeamControllerService } from 'app/module/activities';

@Component({
  selector: 'fury-activity-create-update',
  templateUrl: './activity-create-update.component.html',
  styleUrls: ['./activity-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActivityCreateUpdateComponent implements OnInit {

  activity: Activity[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  teams: Team[];
  periodicities: Periodicity[];
  serviceOrderTypes: ServiceOrderType[];

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ActivityCreateUpdateComponent>,
    private apiServiceOrderType: ServiceOrderTypeControllerService,
    // private apiPeriodicity: PeriodicityControllerService,
    private apiTeam: TeamControllerService,
    public snackBar: MatSnackBar,
    private apiActivity: ActivityControllerService,
    private fb: FormBuilder) {
    // load the activity
    this.apiServiceOrderType.getAllUsingGET().subscribe(
      success => {
        this.serviceOrderTypes = success;
      }, error => {
        snackBar.open('Este serviço está indisponível no momento.', 'OK',
          { duration: 10000 });
      });

    // this.apiPeriodicity.getAllUsingGET1().subscribe(
    //   success => {
    //     this.periodicities = success;
    //   }, error => {
    //     snackBar.open('Este serviço está indisponível no momento.', 'OK',
    //       { duration: 10000 });
    //   });

    this.apiTeam.getAllUsingGET1().subscribe(
      success => {
        this.teams = success;
      }, error => {
        snackBar.open('Este serviço está indisponível no momento.', 'OK',
          { duration: 10000 });
      });
    // instance the form group for mode Update and Create
    this.form = new FormGroup({
      id: new FormControl(),
      description: new FormControl(),
      observation: new FormControl(),
      // idPeriodicity: new FormControl(),
      idTeam: new FormControl(),
      idServiceOrderType: new FormControl(),
      idCompany: new FormControl(1),
    });

  }

  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      // Used in the Update Mode to fill the fields
      this.form = this.fb.group({
        id: [this.defaults.id || null],
        description: [this.defaults.description],
        observation: [this.defaults.observation],
        // idPeriodicity: [this.defaults.periodicity.id],
        idTeam: [this.defaults.team.id],
        idServiceOrderType: [this.defaults.serviceOrderType.id],
        idCompany: [this.defaults.company.id],
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as Activity; // takes blank :)
    }

  }

  createOrUpdate() {
    if (this.mode === 'create') {
      this.createActivity();
    } else if (this.mode === 'update') {
      this.updateActivity();
    }
  }

  save() {

    this.verifyDescription().then(
      _success => {
        if (_success && _success.length) {
          this.form.setErrors({ 'invalid': true });
          this.snackBar.open('Essa descrição já existe! Tente outra.', 'OK', {
            duration: 10000
          });
        } else {
          this.createOrUpdate();
        }
      }
    ).catch(
      _error => {
        console.log(_error);
      }
    );

  }

  createActivity() {
    // send the color as object instead of value
    const activity = this.form.value;
    this.dialogRef.close(activity);
  }

  updateActivity() {
    // send the color as object instead of value
    const activity = this.form.value;
    activity.id = this.defaults.id;
    this.dialogRef.close(activity);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  verifyDescription(): Promise<any> {
    const description = this.form.get('description').value,
      idServiceOrderType = this.form.get('idServiceOrderType').value;

    // se estiver nulo, volta
    if (!description) { return Promise.reject(); }
    // se for igual ao anterior, volta também
    if (description === this.defaults.description &&
      idServiceOrderType == this.defaults.serviceOrderType.id) { return Promise.resolve(true); }

    const data = {
      description: description,
      idCompany: this.form.get('idCompany').value,
      idServiceOrderType: idServiceOrderType,
    };

    const promise = this.apiActivity.getByDescriptionUsingPOST(data).
      toPromise();

    return promise;
  }

}

