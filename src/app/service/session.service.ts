import { Injectable, Output } from '@angular/core';
import { isNullOrUndefined } from 'util';
// import { SessionStoreService } from 'app/module/store/session/session-store.service';
// import { SessionActions } from 'app/module/store/session/session.actions';
//import { NotificationService } from 'app/core/utils/loader/notification.service';
import { Router } from '@angular/router';


@Injectable() export class SessionService {

    constructor(
        // private sessionStore: SessionStoreService,
        //private notifService: NotificationService,
        private router: Router,
        //private toast: SnackbarService,
        //private dialog: MdDialog,
      ) {

      }

      @Output()
      public userName: string = '';

      public userEmail: string;

      public lockSession(): void {
        // this.sessionStore.dispatchExpiredSessionAction();
        this.loadLoginView();
      }

      public loadLoginView(): void {
        this.router.navigate(['/reservations']);
      }

    public loadUser(): void {
        
        this.userName = localStorage.getItem('name');
        this.userEmail = localStorage.getItem('email');
        //this.userName = localStorage.getItem('name');
        // const session = this.sessionStore.getState();
        //console.log(session);
        // if (isNullOrUndefined(session.admin)) {
        //   this.loadLoginView();
        // }else{
        //     this.router.navigate(['/']);
        // }
        //} else if (isNullOrUndefined(session.codigo)) {
         // this.sessionStore.dispatchLoadAction(session.userId, session.codigo);
          /*this.notifService.getResponseAction(SessionActions.Types.LOAD_SUCESS, SessionActions.Types.ERROR)
            .then(() => {
              if (session.isExpiredSession){
                this.lockSession();
              }
            })
            .catch(err => {
              console.log(err);
              this.notifService.handleError(err);
              this.lockSession();
            });*/
      }

}
