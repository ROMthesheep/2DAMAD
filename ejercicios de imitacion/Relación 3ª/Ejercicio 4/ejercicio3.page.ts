import { Component, OnInit } from '@angular/core';
import { CARRITO } from 'src/app/models/carrito';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.page.html',
  styleUrls: ['./ejercicio3.page.scss'],
})
export class Ejercicio3Page implements OnInit {

  carrito:Producto[];
  newItem: String;
  newPrice: number;
  newQuantity: number;

  constructor() { }

  ngOnInit() {
    this.carrito = CARRITO;
  }
  insertaProducto(): void{
    const emple: Producto ={
      item:this.newItem,
      price:this.newPrice,
      quantity:this.newQuantity
    }
    this.carrito.push(emple);
    this.limpiarFormulario();
  }  
  limpiarFormulario() {
    this.newItem == null;
    this.newPrice == null;
    this.newQuantity == null;
  }
}
