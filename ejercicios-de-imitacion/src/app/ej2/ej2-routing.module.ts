import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EJ2Page } from './ej2.page';

const routes: Routes = [
  {
    path: '',
    component: EJ2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EJ2PageRoutingModule {}
