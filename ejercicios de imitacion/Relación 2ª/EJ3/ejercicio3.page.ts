import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.page.html',
  styleUrls: ['./ejercicio3.page.scss'],
})
export class Ejercicio3Page implements OnInit {
  num:number;

  constructor() { }

  ngOnInit() {
    this.num = 0;
  }

  calc(input:number){
    this.num = this.num + input; 
  }

  resetNum(){
    this.num = 0;
  }

}
