import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.page.html',
  styleUrls: ['./ejercicio1.page.scss'],
})
export class Ejercicio1Page implements OnInit {
  nombre:String;
  constructor() { }

  ngOnInit() { 
  }

  showName():void{
    this.nombre = "Luca Lago;
  }

  cleanScreen():void{
    this.nombre = null;
  }

}
