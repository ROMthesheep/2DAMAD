import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EJ1Page } from './ej1.page';

const routes: Routes = [
  {
    path: '',
    component: EJ1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EJ1PageRoutingModule {}
