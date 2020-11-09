import { Component, OnInit } from '@angular/core';
import { ARRAYPRODUCTOS } from 'src/assets/carrito';


@Component({
  selector: 'app-ejercicio03',
  templateUrl: './ejercicio03.page.html',
  styleUrls: ['./ejercicio03.page.scss'],
})
export class Ejercicio03Page implements OnInit {
  
  arrayProductos = ARRAYPRODUCTOS;
  display = document.getElementById("display")
  total:number=0;


  constructor() { }

  ngOnInit() {
    this.arrayProductos.forEach(producto => {
      this.total=this.total+producto.price*producto.quantity;
    });
    console.log(this.total);
    
  }

  

}
