import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.page.html',
  styleUrls: ['./ejercicio1.page.scss'],
})
export class Ejercicio1Page implements OnInit {
  minimo:number;
  maximo:number;
  numAleat:number;


  constructor() { }

  ngOnInit() {
  }
  genAleat(max:number,min:number):void{
    this.numAleat = Math.floor(Math.random() * (max - min) + min);
  }
  interchangeNumbers():void{
    if(this.numAleat != this.minimo && this.numAleat != this.maximo){
      this.numAleat = this.minimo
      console.log("Press")
    }else if(this.numAleat == this.minimo){
      this.numAleat = this.maximo;

    }else{
      this.numAleat = this.minimo;
    }
  }

}
