import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej2',
  templateUrl: './ej2.page.html',
  styleUrls: ['./ej2.page.scss'],
})
export class EJ2Page implements OnInit {
  c:number;
  nombre:String

  constructor() { }

  ngOnInit() {
    this.nombre = "Luca Lago";
    this.c = 0;
  }
  clickListener():void{
    this.c ++;
  }

}
