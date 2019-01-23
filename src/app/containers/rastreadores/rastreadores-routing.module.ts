
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RastreadoresComponent } from './rastreadores.component';

const routes: Routes = [
  {
    path: '',
    component: RastreadoresComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RastreadoresRoutingModule {}

