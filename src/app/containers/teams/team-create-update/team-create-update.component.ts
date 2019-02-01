
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { Team } from 'app/models/teams/teams.model';
import { TeamControllerService } from 'app/module/activities';

@Component({
  selector: 'fury-team-create-update',
  templateUrl: './team-create-update.component.html',
  styleUrls: ['./team-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeamCreateUpdateComponent implements OnInit {

  team: Team[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<TeamCreateUpdateComponent>,
    private apiTeam: TeamControllerService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {

    // instance the form group for mode Update and Create
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      idCompany: new FormControl(1)
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
      this.defaults = {} as Team; // takes blank :)
    }

  }

  createOrUpdate() {
    if (this.mode === 'create') {
      this.createTeam();
    } else if (this.mode === 'update') {
      this.updateTeam();
    }
  }

  save() {

    this.verifyName().then(
      _success => {
        if (_success && _success.length) {
          this.form.get('name').setErrors({ 'invalid': true });
          this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
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

  createTeam() {
    // send the color as object instead of value
    const team = this.form.value;
    this.dialogRef.close(team);
  }

  updateTeam() {
    // send the color as object instead of value
    const team = this.form.value;
    team.id = this.defaults.id;
    this.dialogRef.close(team);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  verifyName(): Promise<any> {
    const name = this.form.get('name').value;

    // se estiver nulo, volta
    if (!name) { return Promise.reject(); }
    // se for igual ao anterior, volta também
    if (name === this.defaults.name) { return Promise.resolve(true); }

    const data = {
      name: name,
      idCompany: this.form.get('idCompany').value,
    };

    const promise = this.apiTeam.getByNameUsingPOST(data).
      toPromise();

    return promise;
  }

}

