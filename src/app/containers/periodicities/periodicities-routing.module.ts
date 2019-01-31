
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodicitiesComponent } from './periodicities.component';

const routes: Routes = [
  {
    path: '',
    component: PeriodicitiesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodicitiesRoutingModule {}

