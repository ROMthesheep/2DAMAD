import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example05',
  templateUrl: './example05.page.html',
  styleUrls: ['./example05.page.scss'],
})
export class Example05Page implements OnInit {

  nums: number[];
  fruits: string[];


  constructor() { }

  ngOnInit() {
    this.nums = [1,5,32,5,56,7,8,12,978];
    this.fruits = ["pear", "peach", "apple", 'orange','mandarine','watermelon','passion fruit','banana'];
  }

}
