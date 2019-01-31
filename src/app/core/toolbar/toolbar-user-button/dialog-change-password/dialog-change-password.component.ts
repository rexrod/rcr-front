import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DialogChangePassword } from './dialog-change-password.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { RastreadoresControllerService } from 'app/containers/rastreadores/rastreadores.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from 'app/utils/PasswordValidation';

@Component({
  selector: 'fury-dialog-change-password',
  templateUrl: './dialog-change-password.component.html',
  styleUrls: ['./dialog-change-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [RastreadoresControllerService],
})
export class DialogChangePasswordComponent implements AfterViewInit {

  rastreadores: any[];
  selectedValue: string;

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogChangePassword,
    private dialogRef: MatDialogRef<DialogChangePasswordComponent>,
    private apiRastreador: RastreadoresControllerService,
    private fb: FormBuilder,
  ) {
    this.form = new FormGroup({
      currentPassword: new FormControl(),
      newPassword: new FormControl(),
      confirmPassword: new FormControl(),
    });
  }

  ngOnInit() {
  
    this.form = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    })
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
