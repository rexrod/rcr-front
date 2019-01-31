
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
import { ActivityCreateUpdateComponent } from './activity-create-update.component';
import { NgxMaskModule } from 'ngx-mask';
import { from } from '../../../../../node_modules/rxjs';
import { DialogPanelModule } from 'app/core/common/dialog-panel/dialog-panel.module';
import { BASE_PATH as SER_PATH, ServiceOrderTypeControllerService } from 'app/module/service-order-types';
import { environment } from 'environments/environment';
import { BASE_PATH as PER_PATH, TeamControllerService, ActivityControllerService } from 'app/module/activities';
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
    DialogPanelModule
  ],
  declarations: [ActivityCreateUpdateComponent],
  entryComponents: [ActivityCreateUpdateComponent],
  exports: [ActivityCreateUpdateComponent],
  providers: [
    { provide: SER_PATH, useValue: environment.origin.serviceOrderTypes },
    { provide: PER_PATH, useValue: environment.origin.activities },
    ServiceOrderTypeControllerService,
    // PeriodicityControllerService,
    TeamControllerService,
    ActivityControllerService
  ]
})
export class ActivityCreateUpdateModule { }

