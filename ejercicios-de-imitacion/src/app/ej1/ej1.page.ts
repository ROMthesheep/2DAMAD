import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej1',
  templateUrl: './ej1.page.html',
  styleUrls: ['./ej1.page.scss'],
})
export class EJ1Page implements OnInit {
  nombre:String;
  constructor() { }

  ngOnInit() { 
  }

  showName():void{
    this.nombre = "Luca Lago";
  }

  cleanScreen():void{
    this.nombre = null;
  }

}