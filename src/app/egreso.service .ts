import { OnInit } from "@angular/core";
import { Egreso } from "./egreso/egreso.model";

export class EgresoService{

 egresos : Egreso[] = [new Egreso('Renta departamento',900),new Egreso('Ropa Shen',200) ];   

 eliminar(egreso:Egreso){
    const indice:number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice,1);
  }
}