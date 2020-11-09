import { Component, OnInit } from '@angular/core';
import { ARRAYPRODUCTOS } from 'src/assets/carrito';
import { isNumber } from 'util';

@Component({
  selector: 'app-ejercicio04',
  templateUrl: './ejercicio04.page.html',
  styleUrls: ['./ejercicio04.page.scss'],
})
export class Ejercicio04Page implements OnInit {
  
  arrayProductos = ARRAYPRODUCTOS;
  display = document.getElementById("display")
  total:number=0;
  itemName:string;
  itemPrice:number;
  itemQuantity:number;

  constructor() { }

  ngOnInit() {
    this.arrayProductos.forEach(producto => {
      this.total=this.total+producto.price*producto.quantity;
    });
  }

  update() {
    if (!isNaN(this.itemPrice)) {
      
    
      this.arrayProductos.push({
        'item': this.itemName,
        'price': this.itemPrice,
        'quantity': this.itemQuantity,
      })
      this.total = 0;
      this.arrayProductos.forEach(producto => {
        this.total = this.total + producto.price * producto.quantity;
      });
    }
  }
}
