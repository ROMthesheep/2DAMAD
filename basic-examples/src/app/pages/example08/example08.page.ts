import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example08',
  templateUrl: './example08.page.html',
  styleUrls: ['./example08.page.scss'],
})
export class Example08Page implements OnInit {

  temp: number = 24;
  constructor() { }

  ngOnInit() {
    
  }
  tMod(dt: number) {
    this.temp += dt;
  }

}
