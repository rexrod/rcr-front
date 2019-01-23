
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLivesComponent } from './dashboard-lives.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLivesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardLivesRoutingModule {}

