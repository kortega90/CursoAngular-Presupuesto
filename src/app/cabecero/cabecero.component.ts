import { EgresoService } from './../egreso.service ';
import { IngresoService } from './../ingreso.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent  {
  @Input() presupuestoFinal: number = 0;
  @Input()sumIngresos!: number;
  @Input()sumEgresos!: number;
  @Input() tax: number = 0;


  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) { }
 
}
