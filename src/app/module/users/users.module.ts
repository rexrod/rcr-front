import { NgModule } from '@angular/core';

import { environment } from 'environments/environment';
import { BASE_PATH } from './variables';
import { UserControllerService } from 'app/module/users/api/userController.service';

@NgModule({
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.api },
    UserControllerService
  ]
})

export class AppUsersModule { }
