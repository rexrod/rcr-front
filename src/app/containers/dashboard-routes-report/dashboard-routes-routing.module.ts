
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRoutesComponent } from './dashboard-routes.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardRoutesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutesRoutingModule {}

