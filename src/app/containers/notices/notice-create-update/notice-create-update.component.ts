import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatCalendar, MatSnackBar } from '@angular/material';
import { Notice } from 'app/module/notices/model/notice';
import { NoticePriority } from 'app/module/notices/model/noticePriority';
import { ViewEncapsulation } from '@angular/core';
import { NoticePriorityControllerService } from 'app/module/notices';
@Component({
  selector: 'fury-notice-create-update',
  templateUrl: './notice-create-update.component.html',
  styleUrls: ['./notice-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoticeCreateUpdateComponent implements OnInit {

  priorities: NoticePriority[];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  correctHours = true;
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<NoticeCreateUpdateComponent>,
    private apiPriority: NoticePriorityControllerService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar) {
    // load the notice priorities
    this.apiPriority.getAllUsingGET1().
      subscribe(noti => {
        this.priorities = <NoticePriority[]>noti;
      });
    // instance the form group for mode Update and Create
    this.form = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      description: new FormControl(),
      idPriority: new FormControl(),
      validate_day: new FormControl(),
      validate_hour: new FormControl(),
      validate: new FormControl(),
      idCompany: new FormControl(),
    });
  }

  @ViewChild(MatCalendar) _datePicker: MatCalendar<Date>;

  ngOnInit() {

    this._datePicker.minDate = new Date();

    this._datePicker.selectedChange.subscribe(d => {
      // Select the date you clicked
      this._datePicker.selected = d;

      // Formating date
      const year = d.getFullYear();
      const month = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
      const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();

      // format datetime: '1970-01-01 00:00'
      this.form.controls['validate_day'].setValue(year + '-' + month + '-' + day); // value directly in the form
    });

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      // set value in calendar
      this.setValueInCalendar(this.defaults.validate);

      // Used in the Update Mode to fill the fields
      this.form = this.fb.group({
        id: [this.defaults.id || null],
        title: [this.defaults.title || null],
        description: [this.defaults.description || null],
        idPriority: [this.defaults.priority.id],
        validate_day: [this.defaults.validate.split(' ')[0]],
        validate_hour: [this.defaults.validate.split(' ')[1]],
        validate: [this.defaults.validate],
        idCompany: [this.defaults.company.id]
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as Notice; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createNotice();
    } else if (this.mode === 'update') {
      this.updateNotice();
    }
  }

  createNotice() {
    // concatenates day with hour
    const _validate = this.form.get('validate_day').value + ' ' + this.form.get('validate_hour').value;
    const hora_input = new Date(_validate);
    const hora_atual = new Date();
    // Verificando se a hora é superior a atual
    if (hora_input.getTime() < hora_atual.getTime()) {
      this.form.setErrors({ 'invalid': true });
      this.correctHours = false;
      this.snackBar.open('A hora não pode ser menor que a atual', 'OK', {
        duration: 10000
      });
      return false;
    } else {
      this.correctHours = true;
    }
    this.form.get('validate').setValue(_validate);
    this.form.removeControl('validate_day');
    this.form.removeControl('validate_hour');
    // ID FIXO PQ AINDA NÃO TEM USUARIO LOGADO
    this.form.controls['idCompany'].setValue(1);

    const notice = this.form.value;
    this.dialogRef.close(notice);
  }

  updateNotice() {
    const _validate = this.form.get('validate_day').value + ' ' + this.form.get('validate_hour').value;
    const hora_input = new Date(_validate);
    const hora_atual = new Date();
    if (hora_input.getTime() < hora_atual.getTime()) {
      this.form.setErrors({ 'invalid': true });
      this.correctHours = false;
      this.snackBar.open('A hora não pode ser menor que a atual', 'OK', {
        duration: 10000
      });
      return false;
    } else {
      this.correctHours = true;
    }
    this.form.get('validate').setValue(this.form.get('validate_day').value + ' ' + this.form.get('validate_hour').value);
    this.form.removeControl('validate_day');
    this.form.removeControl('validate_hour');

    const notice = this.form.value;
    notice.id = this.defaults.id;
    this.dialogRef.close(notice);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  setValueInCalendar(d) {
    const date = d.split(' ')[0];
    const year = date.split('-')[0];
    const month = date.split('-')[1] - 1;
    const day = date.split('-')[2];
    const dateFormat = new Date(year, month, day);
    this._datePicker.selected = dateFormat;
    this._datePicker.startAt = dateFormat;
  }
}
