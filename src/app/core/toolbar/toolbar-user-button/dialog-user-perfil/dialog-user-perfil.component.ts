import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DialogUserPerfil } from './dialog-user-perfil.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { RastreadoresControllerService } from 'app/containers/rastreadores/rastreadores.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'fury-dialog-user-perfil',
  templateUrl: './dialog-user-perfil.component.html',
  styleUrls: ['./dialog-user-perfil.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [RastreadoresControllerService],
})
export class DialogUserPerfilComponent implements AfterViewInit {

  rastreadores: any[];
  selectedValue: string;

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogUserPerfil,
    private dialogRef: MatDialogRef<DialogUserPerfilComponent>,
    private apiRastreador: RastreadoresControllerService,
    private fb: FormBuilder,
  ) {
    this.form = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      registration: new FormControl(),
    });
  }

  ngOnInit() {
    if (this.data) { 
      this.form = this.fb.group({
        name: [this.data.name],
        email: [this.data.email],
        registration: [this.data.registration], 
      });
    }
  }

  ngAfterViewInit() {

  }

  confirm() {
    // if(this.data.type == 'add'){
    //   this.data.trackerSerial = this.selectedValue;
    // }
    const user = this.form.value;
    this.dialogRef.close(user);
  }

  
}
