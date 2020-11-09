import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ejercicio02",
  templateUrl: "./ejercicio02.page.html",
  styleUrls: ["./ejercicio02.page.scss"],
})
export class Ejercicio02Page implements OnInit {
  meters: number;
  cm: number;
  inches: number;

  constructor() {}

  ngOnInit() {}

  unitChange(mode) {
    switch (mode) {
      case 1:
        this.cm = +(this.inches*2.54).toFixed(3);
        this.meters = +(this.inches*0.0254).toFixed(3);
        break;
      case 2:
        this.inches = +(this.cm*0.403701).toFixed(3);
        this.meters = +(this.cm*0.01).toFixed(3);
        break;
      case 3:
        this.inches = +(this.meters*39.3701).toFixed(3);
        this.cm = +(this.meters*100).toFixed(3);
        break;
      default:
        break;
    }
  }
}
