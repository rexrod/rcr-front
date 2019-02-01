
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatDividerModule
} from '@angular/material';
import { ServiceOrderTitleCreateUpdateComponent } from './service-order-title-create-update.component';
import {NgxMaskModule} from 'ngx-mask';
import { from } from '../../../../../node_modules/rxjs';
import { DialogPanelModule } from 'app/core/common/dialog-panel/dialog-panel.module';
import { DirectiveModule } from 'app/directives/directive.module';
import { BASE_PATH as SOT_URL } from 'app/module/service-order-titles';
import { environment } from 'environments/environment';
import { ServiceOrderTypeControllerService } from 'app/module/service-order-types';
import { SegmentControllerService, BASE_PATH as SEG_URL } from 'app/module/segments';
import { SlaControllerService, BASE_PATH as SLA_URL } from 'app/module/slas';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    MatDatepickerModule,
    MatSidenavModule,
    MatDividerModule,
    DialogPanelModule,
    DirectiveModule
  ],
  declarations: [ServiceOrderTitleCreateUpdateComponent],
  entryComponents: [ServiceOrderTitleCreateUpdateComponent],
  exports: [ServiceOrderTitleCreateUpdateComponent],
  providers: [
    { provide: SOT_URL, useValue: environment.origin.serviceOrderTypes},
    { provide: SEG_URL, useValue: environment.origin.segments},
    { provide: SLA_URL, useValue: environment.origin.slas},
    ServiceOrderTypeControllerService,
    SegmentControllerService,
    SlaControllerService
  ]
})
export class ServiceOrderTitleCreateUpdateModule {}

