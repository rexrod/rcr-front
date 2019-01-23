
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceOrderTitlesComponent } from './service-order-titles.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceOrderTitlesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceOrderTitlesRoutingModule {}

