import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-example06',
  templateUrl: './example06.page.html',
  styleUrls: ['./example06.page.scss'],
})
export class Example06Page implements OnInit {

  nums: number[];
  fruits: string[];
  inputN: number;
  inputF: string;
  
  constructor() { }

  ngOnInit() {
    this.nums = [1,5,32,5,56,7,8,12,978];
    this.fruits = ["pear", "peach", "apple"];
  }

  addNum(){
    this.nums.push(this.inputN);
    this.inputN=null;
  }
  addFruit(){
    this.fruits.push(this.inputF);
    this.inputF=null;
  }
}
