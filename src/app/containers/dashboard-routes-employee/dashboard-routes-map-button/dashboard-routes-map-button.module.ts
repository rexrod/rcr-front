import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FuryCardModule } from '../../../core/common/card/card.module';
import { ClickOutsideModule } from '../../../core/common/click-outside/click-outside.module';
import { MaterialModule } from 'app/core/common/material-components.module';
import { ScrollbarModule } from '../../../core/common/scrollbar/scrollbar.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ScrollbarModule,
    FormsModule,
    ClickOutsideModule,
    FuryCardModule,
  ],
  declarations: [
  ],
})
export class DashboardRoutesMapButtonModule {
}
