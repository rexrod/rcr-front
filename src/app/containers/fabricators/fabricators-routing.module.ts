
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FabricatorsComponent } from './fabricators.component';

const routes: Routes = [
  {
    path: '',
    component: FabricatorsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricatorsRoutingModule {}

