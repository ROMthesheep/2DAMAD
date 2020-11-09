import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example03',
  templateUrl: './example03.page.html',
  styleUrls: ['./example03.page.scss'],
})
export class Example03Page implements OnInit {
  
  n: number;

  constructor() { }

  ngOnInit() {
    this.n = 0;
  }

  newRandomValue():void {
    this.n=Math.floor(Math.random()*10+1);
  }
  incremetValue():void {
    this.n++;
  }
  decrementValue():void{
    this.n--;
  }
  reset():void{
    this.n=0;
  }

}
