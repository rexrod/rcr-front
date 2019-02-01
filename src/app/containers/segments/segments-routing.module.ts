
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SegmentsComponent } from './segments.component';

const routes: Routes = [
  {
    path: '',
    component: SegmentsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegmentsRoutingModule {}

