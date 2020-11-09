import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EJ1PageRoutingModule } from './ej1-routing.module';

import { EJ1Page } from './ej1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EJ1PageRoutingModule
  ],
  declarations: [EJ1Page]
})
export class EJ1PageModule {}
