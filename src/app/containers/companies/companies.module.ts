import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import {NgxMaskModule} from 'ngx-mask';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { CompanyCreateUpdateModule} from './company-create-update/company-create-update.module';
import { CompanyDetailModule} from './company-detail/company-detail.module';
import { PhonePipe } from '../../pipes/phone/phone.pipe';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';
import { BASE_PATH, CompanyControllerService } from '../../module/companies';
import { environment } from 'environments/environment';
import { PipeModule } from 'app/pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CompaniesRoutingModule,
    CompanyCreateUpdateModule,
    CompanyDetailModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    NgxMaskModule,
    DialogDeleteModule,
    PipeModule
    // PhonePipe
  ],
  declarations: [CompaniesComponent,
    // PhonePipe,
  ],
  exports: [CompaniesComponent,
    // PhonePipe,
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.companies },
    CompanyControllerService
  ]
})
export class CompaniesModule { }
