import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeOutAnimation } from '../../../core/common/route.animation';
import { UserControllerService } from 'app/module/users/api/userController.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'fury-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  host: {
    '[@fadeOutAnimation]': 'true'
  },
  animations: [fadeOutAnimation]
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  inputType = 'password';
  visible = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private users: UserControllerService,
              public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
      registration: ['', Validators.required],
    });
  }

  send() {
    // this.router.navigate(['/']);
  }

  sendCustom() {
    this.visible = true;
    this.create(this.form.get('email').value, this.form.get('password').value,this.form.get('name').value,this.form.get('registration').value).then(
      success => {
        this.router.navigate(['/dashboard-lives']);
        console.log(success);
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
        this.visible = false;
        this.snackBar.open('Usuário Inválido!','OK',{
          duration: 30000,
          panelClass: ['blue-snackbar']
        });
      }
    );
    this.visible = false;
  }

  public create(email: string, senha: string, name: string, registration: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Async Work Complete');
        //resolve();
      }, 1000);
      this.users.createNewUser(email,senha, name, registration).subscribe(res => {
          resolve(res);
          //localStorage.setItem('token', res.access_token);
          //this.sessionStore.dispatchCreateAction(res);
          }, err => reject(err));
    });
  }

  showPassword() {
    this.inputType = 'text';
    this.visible = true;
    this.cd.markForCheck();
  }

  hidePassword() {
    this.inputType = 'password';
    this.visible = false;
    this.cd.markForCheck();
  }
}
