import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.page.html',
  styleUrls: ['./ejercicio5.page.scss'],
})
export class Ejercicio5Page implements OnInit {
  minimo:number;
  maximo:number;
  randnum:number;

  constructor() { }

  ngOnInit() {
  }
  genAleat():void{
    this.randnum = Math.floor(Math.random()*this.minimo + (this.maximo-this.minimo))
  }

}
