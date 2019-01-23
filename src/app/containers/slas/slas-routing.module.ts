
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlasComponent } from './slas.component';

const routes: Routes = [
  {
    path: '',
    component: SlasComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlasRoutingModule {}

