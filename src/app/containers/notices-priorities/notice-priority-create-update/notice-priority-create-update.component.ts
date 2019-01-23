import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { NoticePriority } from 'app/models/notices/notices-priorities.model';
import { Color } from 'app/models/notices/colors.model';
import { NoticePriorityControllerService } from '../../../module/notices/api/noticePriorityController.service';
import { ViewEncapsulation } from '@angular/core';
// import { DialogPanelComponent } from 'app/core/common/dialog-panel/dialog-panel.component';
@Component({
  selector: 'fury-notice-priority-create-update',
  templateUrl: './notice-priority-create-update.component.html',
  styleUrls: ['./notice-priority-create-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoticePriorityCreateUpdateComponent implements OnInit {

  priorities: NoticePriority[];
  colors: Color[] = [
    { id: '#F7EE10', name: 'Amarelo', level: 1 },
    { id: '#F7B010', name: 'Laranja', level: 2 },
    { id: '#B10707', name: 'Vermelho', level: 3 },
  ];
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<NoticePriorityCreateUpdateComponent>,
    private apiPriority: NoticePriorityControllerService,
    public snackBar: MatSnackBar,
    private fb: FormBuilder) {
    // load the notice priorities
    // this.apiPriority.getAllUsingGET1().
    // subscribe(noti => {
    // this.priorities =  <NoticePriority[]>noti;
    // });
    // instance the form group for mode Update and Create
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      level: new FormControl(),
      color: new FormControl(),
      idCompany: new FormControl(),
    });
  }
  ngOnInit() {

    if (this.defaults) { // <-- do you have data from the main screen?
      this.mode = 'update';
      // Used in the Update Mode to fill the fields
      this.form = this.fb.group({
        id: [this.defaults.id || null],
        name: [this.defaults.name],
        level: [this.defaults.level],
        color: [this.defaults.color],
        idCompany: [this.defaults.company.id]
      });

    } else { // <-- don't have data :( = Mode Create
      this.defaults = {} as NoticePriority; // takes blank :)
    }

  }

  save() {
    if (this.mode === 'create') {
      this.createPriority();
    } else if (this.mode === 'update') {
      this.updatePriority();
    }
  }

  createPriority() {
    // Remove espaços em branco no inicio e no fim
    this.form.get('name').setValue(this.form.get('name').value.trim());
    // ID FIXO PQ AINDA NÃO TEM USUARIO LOGADO
    this.form.controls['idCompany'].setValue(1);
    // send the color as object instead of value
    const obj = this.colors[this.colors.findIndex(l => l.id === this.form.get('color').value)];
    this.form.get('level').setValue(obj.level);
    const priority = this.form.value;
    this.dialogRef.close(priority);
  }

  updatePriority() {
    // Remove espaços em branco no inicio e no fim
    this.form.get('name').setValue(this.form.get('name').value.trim());
    // send the color as object instead of value
    const obj = this.colors[this.colors.findIndex(l => l.id === this.form.get('color').value)];
    this.form.get('level').setValue(obj.level);
    const priority = this.form.value;
    priority.id = this.defaults.id;
    this.dialogRef.close(priority);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }

  verifyPriority(e) {
    // se estiver nulo, volta
    if (!e) { return; }
    // se for igual a ele mesmo, volta também
    if (e === this.defaults.name) { return; }
    // isso é so pra deixar mais legível o que é 'e'
    const priorityName = e;
    // O ID DA COMPANHIA É FIXO PQ AINDA NÃO TEM LOGIN
    this.apiPriority.getByCompanyAndNameUsingGET(1, priorityName).
      subscribe(_priorityName => {
        if (_priorityName.length) {
          this.form.get('name').setErrors({ 'invalid': true });
          this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
            duration: 10000
          });
        }
      });
  }

}
