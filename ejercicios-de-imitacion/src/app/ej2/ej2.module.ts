import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EJ2PageRoutingModule } from './ej2-routing.module';

import { EJ2Page } from './ej2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EJ2PageRoutingModule
  ],
  declarations: [EJ2Page]
})
export class EJ2PageModule {}
