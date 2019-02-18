import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { MaterialModule } from '../common/material-components.module';
import { BASE_PATH, CompanyControllerService } from 'app/module/performa';
import { environment } from 'environments/environment';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService,
    { provide: BASE_PATH, useValue: environment.origin.performaApi },
    CompanyControllerService
  ],

})
export class LoginModule {
}
