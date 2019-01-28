import { Injectable, Output, EventEmitter } from '@angular/core';
// import { LogincontrollerApi } from 'app/module/controle-acesso/api/LogincontrollerApi';
// import { NotificationService } from 'app/core/utils/loader/notification.service';
// import { UsuarioModel } from 'app/models/controle-acesso/usuario.model';
//import { SessionStoreService } from 'app/module/store/session/session-store.service';
// import { SessionActions } from 'app/module/store/session/session.actions';
import { UserControllerService } from 'app/module/users/api/userController.service';

import { Router } from '@angular/router';
import { SessionService } from 'app/service/session.service';
import { CommonModule } from '@angular/common';
import { SidenavService } from '../sidenav/sidenav.service';
import { SidenavItem } from '../sidenav/sidenav-item/sidenav-item.interface';


@Injectable()
export class LoginService {

  static closeFloatWindow = new EventEmitter<boolean>();
  static openFloatWindow = new EventEmitter<boolean>();

  menu: SidenavItem[] = [];

  @Output()
  public usuario = new EventEmitter<{ nome: string, codigo: number }>();

  private sistema = 'Sistema VENDAS';

  constructor(
    // private main: MainComponent,
    private router: Router,
    //private sessionStore: SessionStoreService,
    // private cartService: CartService,
    // private notifService: NotificationService,
    // private loginService: LogincontrollerApi,
    // private stompService: StompConfigService,
    private users: UserControllerService,
    // private pessoaGeral: PessoaPemazaControllerService,
    // private pessoaGeralFuncionalidade: PessoacontrollerApi
    public sidenavService: SidenavService,
  ) { }

  public isUserNameValid(userName: any): Promise<any> {
    const reg = /^\d+$/;
    /*return new Promise((resolve, reject) => {
      if (reg.test(userName)) {
        this.loginService.findByCodigoVendedorUsingGET(userName)
          .subscribe(res => {
            resolve(res);
          }, err => {
            reject(err);
          });
      } else {
        this.loginService.findByLoginUsingGETWithHttpInfo(userName, this.sistema)
          .subscribe(res => {
            try {
              res.json();
              resolve(res.json());
            } catch(e) {
              resolve(false);
            }
          }, err => reject(err));
      }
    })*/
    return null;
  }

  public isPasswordValid(userName: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // this.loginService.validatePasswordByLoginUsingGETWithHttpInfo(userName, password, this.sistema)
      //  .subscribe(res => {
      //    resolve(res.json());
      //  }, err => reject(err));
    });
  }

  public login(email: string, senha: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Async Work Complete');
        //resolve();
      }, 1000);
      this.users.loginUsingPOSTCustom(email,senha).subscribe(res => {
          localStorage.setItem('token', res.access_token);
          //this.sessionStore.dispatchCreateAction(res);
          this.users.getUserProfile().subscribe(
            response => {
              if(response.admin){
                localStorage.setItem('admin', response.admin);
              
                this.menu.push({
                  name: 'Configurações',
                  // routeOrFunction: '/configurations',
                  icon: 'settings',
                  position: 99,
                  subItems: [
                    {
                      name: 'Usuários',
                      routeOrFunction: '/users',
                      icon: 'supervised_user_circle',
                      position: 1
                    },
                    // {
                    //   name: 'Perfis',
                    //   routeOrFunction: '/profiles',
                    //   icon: 'group',
                    //   position: 21
                    // }
                  ]
                });
                
                this.menu.forEach(item => this.sidenavService.addItem(item));
              }
            });    
          resolve(res); 
        }, err => reject(err));
    });
  }

    public loginCustom(email: string, senha: string): Promise<any> {
      return new Promise((resolve, reject) => {
        this.users.loginUsingPOSTCustom(email,senha).subscribe(res => {
              //expireDate = new Date().getTime() + (1000 * res.expires_in);
              localStorage.setItem('token', res.access_token);
              //Cookie.set('access_token', res.access_token, expireDate);
              //this.sessionStore.dispatchCreateAction(res);
              this.users.getUserProfile().subscribe(
                res => {
                  if(res.admin){
                    localStorage.setItem('admin', res.admin);
                  }
               }
             );
             resolve(res);
         });
      });

    // this.sessionStore.dispatchLoginAction(user.id);
    // this.sessionStore.dispatchLoadPessoaAction(user.codigoPessoa);
    // setTimeout(() => LoginService.openFloatWindow.emit(true), 500);
    // return this.notifService.getResponseAction(SessionActions.Types.LOGIN_SUCESS);
  }

  public logout(): void {
    // this.usuario.emit({nome:'', codigo: 0});
    // LoginService.closeFloatWindow.emit(true);
    // this.cartService.resetCart();
    // this.sessionStore.dispatchRemoveActionSucess();
    // this.demon.dispatchRemoveAction();
    localStorage.clear();
    window.location.replace('/login');
    //this.router.navigate(['/login']);
  }
}
