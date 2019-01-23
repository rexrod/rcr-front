
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceOrderTypesComponent } from './service-order-types.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceOrderTypesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceOrderTypesRoutingModule {}

