
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeasuresUnitsComponent } from './measures-units.component';

const routes: Routes = [
  {
    path: '',
    component: MeasuresUnitsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeasuresUnitsRoutingModule {}

