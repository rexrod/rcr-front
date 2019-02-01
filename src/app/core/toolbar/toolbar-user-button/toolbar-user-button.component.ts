import { Component, OnInit, Input, Injectable, Output } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogUserPerfilComponent } from './dialog-user-perfil/dialog-user-perfil.component';
import { UserControllerService } from 'app/module/users';
import { Rastreador } from 'app/models/rastreadores/rastreadores.model';
import { User } from 'app/models/users/users.model';
import { SessionService } from 'app/service/session.service';
import { DialogChangePasswordComponent } from './dialog-change-password/dialog-change-password.component';

@Component({
  selector: 'fury-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss'],
  providers: [UserControllerService, SessionService]
})

@Injectable()
export class ToolbarUserButtonComponent implements OnInit {

  isOpen: boolean;

  @Output()
  public userName;

  user: User;
  
  constructor(
    private login: LoginService,
    private dialog: MatDialog,
    public snackBar: MatSnackBar,
    private apiUser: UserControllerService,
    public session: SessionService,
  ) { 

    
  }

  ngOnInit() {
    // this.userName = this.session.getState().admin.establishment.name;
    this.userName = localStorage.getItem('name');
    
    setTimeout(() => {
      this.session.loadUser();
      //resolve();

    }, 1000);
    //console.log('Nome: ' + this.session.userName);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  logout() {
    this.login.logout();
  }

  alterarUsuario() {
    new Promise((resolve, reject) => {  
      this.apiUser.getUserProfile().
          subscribe(
              success => {
                this.user = <User>success;

                this.dialog.open(DialogUserPerfilComponent, {
                  width: '41%', height: '57%',
                  data: { id: '', 
                          displayName: this.user.name,
                          title: 'Deseja ativar o usuário?',
                          type: '',
                          name: this.user.name,
                          email: this.user.email,
                          registration: this.user.registration  },
                  panelClass: 'dialog-create-update'
                  }).afterClosed().subscribe((_user: any) => {
              
                      if (_user) {
                        this.apiUser.updateUserProfile(_user).
                          subscribe(
                              success => {
                                  this.snackBar.open('Perfil atualizado com sucesso!', 'OK', {
                                      duration: 10000
                                  });
                                  this.session.userName = _user.name;
                                  localStorage.setItem('name', _user.name);
                                  //this.loadData();
                              },
                              error => {
                                  console.log(error);
                                  this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                                  'OK', {
                                      duration: 10000
                                  });
                              });
                      }
                    });
                },
              error => {
                  console.log(error);
                  this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                  'OK', {
                      duration: 10000
                  });
              });
            });
  }

  alterarSenha() {
    new Promise((resolve, reject) => {  

      this.dialog.open(DialogChangePasswordComponent, {
        width: '41%', height: '37%',
        data: { id: '', 
                displayName: '',
                title: 'Deseja ativar o usuário?',
                type: '',
                name: '',
                email: '',
                registration: ''  },
        panelClass: 'dialog-create-update'
        }).afterClosed().subscribe((_user: any) => { 
          if (_user) {
            this.apiUser.changeUserPassword(_user).
              subscribe(
                  success => {
                      this.snackBar.open('Senha atualizada com sucesso!', 'OK', {
                          duration: 10000
                      });

                      this.apiUser.loginUsingPOSTCustom(this.session.userEmail,_user.newPassword).subscribe(res => {
                        localStorage.setItem('token', res.access_token);
                        //this.session.userEmail = res.email;                               
                      }, err => console.log(err));
                  },
                  error => {
                      console.log(error);
                      this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                      'OK', {
                          duration: 10000
                      });
                  });
          }
        });
      });
  }
}

