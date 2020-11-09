import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example01',
  templateUrl: './example01.page.html',
  styleUrls: ['./example01.page.scss'],
})
export class Example01Page implements OnInit {

  x: number;
  y: number;
  word: string;
  person: object;
  

  constructor() { }

  ngOnInit() {
    this.x=23;
    this.y=9;
    this.word="muchacho";
    this.person = {
      name: "Alan Brito",
      job: "full-stack developer",
      age:23,
      salary: 2000
    };
  }

}
