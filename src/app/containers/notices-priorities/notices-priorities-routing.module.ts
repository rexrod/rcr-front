import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticesPrioritiesComponent } from './notices-priorities.component';

const routes: Routes = [
  {
    path: '',
    component: NoticesPrioritiesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticesPrioritiesRoutingModule { }
