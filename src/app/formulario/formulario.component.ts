import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../ingreso.service';
import { EgresoService } from '../egreso.service ';
import { Ingreso } from '../ingreso/ingreso.model';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  descripcion: string = '';
  valor!:number;
  tipo:String = "ing";


  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) { }

  ngOnInit(): void {
  }

  agregarNovo(){
  console.log(this.valor)

    if (this.tipo === "ing"){
      this.ingresoService.ingresos.push(new Ingreso(this.descripcion,this.valor));
      
    }
   else{
    this.egresoService.egresos.push(new Ingreso(this.descripcion,this.valor));
   }
  
  }

  tipoOperacion(event:any){

   this.tipo = event.target.value;
  }
}
