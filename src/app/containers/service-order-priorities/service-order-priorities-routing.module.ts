
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceOrderPrioritiesComponent } from './service-order-priorities.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceOrderPrioritiesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceOrderPrioritiesRoutingModule {}

