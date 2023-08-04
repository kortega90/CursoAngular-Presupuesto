import { EgresoService } from './../egreso.service ';
import { Egreso } from './egreso.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent  {
  
  
  egresos:Egreso [] =[];
  @Input() sumEgresos: number;

  constructor(private egresoService: EgresoService) { 
   
  }

  ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
  }
  
  eliminarEgreso(egreso:Egreso){
    this.egresoService.eliminar(egreso)
    }

    calcularPorcentaje(egreso:Egreso){
      return egreso.valor /this.sumEgresos;
    }
}
