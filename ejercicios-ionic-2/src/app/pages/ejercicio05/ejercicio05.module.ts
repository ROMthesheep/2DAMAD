import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio05PageRoutingModule } from './ejercicio05-routing.module';

import { Ejercicio05Page } from './ejercicio05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio05PageRoutingModule
  ],
  declarations: [Ejercicio05Page]
})
export class Ejercicio05PageModule {}
