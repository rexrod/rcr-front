
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

import { ServiceOrderTitle } from 'app/models/service-order-titles/service-order-titles.model';
import { ServiceOrderTitleControllerService } from 'app/module/service-order-titles';
import { Segment } from 'app/models/service-order-titles/segments.model';
import { SegmentControllerService, BASE_PATH } from 'app/module/segments';
import { SlaControllerService } from 'app/module/slas';
import { Sla } from 'app/models/service-order-titles/sla.model';

@Component({
  selector: 'fury-service-order-title-create-update',
  templateUrl: './service-order-title-create-update.component.html',
  styleUrls: ['./service-order-title-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServiceOrderTitleCreateUpdateComponent implements OnInit {

  serviceOrderTitle: ServiceOrderTitle[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  segments: Segment[];
  slas: Sla[];


  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ServiceOrderTitleCreateUpdateComponent>,
    private apiServiceOrderTitle: ServiceOrderTitleControllerService,
    private apiSegment: SegmentControllerService,
    private apiSla: SlaControllerService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
    // load the serviceOrderTitle
    this.apiSegment.getAllUsingGET().
      subscribe(s => {
        this.segments = <Segment[]>s;
      });

    // load the Sla
    this.apiSla.getAllUsingGET().
      subscribe(s => {
        this.slas = <Sla[]>s;
      });
    // instance the form group for mode Update and Create
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl({ value: '', disabled: true }, Validators.required),
      idSegment: new FormControl(),
      idSLA: new FormControl(),
      idCompany: new FormControl(1),
    });

  }

  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      // Used in the Update Mode to fill the fields
      this.form = this.fb.group({
        id: [this.defaults.id || null],
        name: [this.defaults.name],
        idSegment: [this.defaults.segment.id],
        idSLA: [this.defaults.sla.id],
        idCompany: [this.defaults.idCompany],
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as ServiceOrderTitle; // takes blank :)
    }

    // this.onChanges();
  }

  createOrUpdate() {
    if (this.mode === 'create') {
      this.createServiceOrderTitle();
    } else if (this.mode === 'update') {
      this.updateServiceOrderTitle();
    }
  }

  removeSpaces() {
    const name = this.form.get('name').value;
    this.form.get('name').setValue(name.trim().replace(/\s{2,}/g, ' '));
  }

  save() {
    this.removeSpaces();

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

  createServiceOrderTitle() {
    // send the color as object instead of value
    const serviceOrderTitle = this.form.value;
    this.dialogRef.close(serviceOrderTitle);
  }

  updateServiceOrderTitle() {
    // send the color as object instead of value
    const serviceOrderTitle = this.form.value;
    serviceOrderTitle.id = this.defaults.id;
    this.dialogRef.close(serviceOrderTitle);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  verifyName(): Promise<any> {
    const name = this.form.get('name').value,
      // idPeriodicity = this.form.get('idPeriodicity').value,
      idSegment = this.form.get('idSegment').value;

    // se estiver nulo, volta
    if (!name) { return Promise.reject(); }
    // se for igual ao anterior, volta também
    if (name === this.defaults.name &&
      // idPeriodicity === this.defaults.idPeriodicity &&
      idSegment == this.defaults.segment.id) { return Promise.resolve(true); }

    const data = {
      name: name,
      idCompany: this.form.get('idCompany').value,
      idSegment: idSegment,
    };

    const promise = this.apiServiceOrderTitle.getByNameUsingPOST(data).
      toPromise();

    return promise;
  }

  onChanges() {
    if (this.form.get('idSegment').value) {
      this.form.get('name').enable();
    } else {
      this.form.get('name').reset();
      this.form.get('name').disable();
    }
  }
}

