
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteCoutinhoComponent } from './teste-coutinho.component';

const routes: Routes = [
  {
    path: '',
    component: TesteCoutinhoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteCoutinhoRoutingModule {}

