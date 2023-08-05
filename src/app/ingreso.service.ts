import { OnInit } from '@angular/core';

import { Ingreso } from "./ingreso/ingreso.model";
import { CabeceroComponent } from './cabecero/cabecero.component';

export class IngresoService {
    
    cabeceroComponent: CabeceroComponent;
    ingresos: Ingreso[] = [new Ingreso('salario',4000),new Ingreso('Venta coche',500)];
    
    eliminar(ingreso:Ingreso){
      const indice:number = this.ingresos.indexOf(ingreso);
      this.ingresos.splice(indice,1);
    }
}

