import { EgresoService } from './egreso.service ';
import { Egreso } from './egreso/egreso.model';
import { IngresoService } from './ingreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'presupuesto-app';
  ingresos: Ingreso[] =[];
  egresos: Egreso[] =[];
  
  constructor(private ingresoService: IngresoService, private egresoService: EgresoService){
    this.ingresos = this.ingresoService.ingresos;
    this.egresos = this.egresoService.egresos;
  }
  
  getIngresoTotal(){

    let sumIngresos:number = 0;

    //sumIngresos = this.ingresos.map(x => x.valor).reduce((accumulator,value) => accumulator + value,0);
    this.ingresos.forEach (
      ingreso => {
        sumIngresos += ingreso.valor;
      }
    );
    return sumIngresos;
  }

  getEgresoTotal(){
    let sumEgresos = this.egresoService.egresos.map(x => x.valor).reduce((accumulator,value) => accumulator + value,0);
    return sumEgresos;
  }

  getPorcentajetotal(){
    return  (this.getEgresoTotal())/this.getIngresoTotal() ;
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
