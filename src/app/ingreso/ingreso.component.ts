import { IngresoService } from './../ingreso.service';

import { Component, Input, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  
  ingresos:Ingreso[] =[];
  //@Input() ingresoComp!:Ingreso;

  constructor(private ingresoService: IngresoService){}

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarRegistro(ingreso:Ingreso){
  this.ingresoService.eliminar(ingreso);
  }

}
