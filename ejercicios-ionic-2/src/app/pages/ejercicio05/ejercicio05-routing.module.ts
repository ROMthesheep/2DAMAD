import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio05Page } from './ejercicio05.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio05PageRoutingModule {}
