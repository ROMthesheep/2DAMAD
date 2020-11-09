import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/model/empleado';
import { listaEmpleados } from 'src/app/model/lista-empleados';

@Component({
  selector: 'app-example07',
  templateUrl: './example07.page.html',
  styleUrls: ['./example07.page.scss'],
})
export class Example07Page implements OnInit {
  empleados: Empleado[];

  constructor() { }

  ngOnInit() {
    this.empleados = listaEmpleados;
  }

}
