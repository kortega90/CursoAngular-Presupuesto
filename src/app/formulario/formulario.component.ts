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

  // descripcion!: string;
  // valor!: number;
  icone = document.getElementById('lista-conteudos');;

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) { 
  }

  ngOnInit(): void {
  }

  agregarNovo(descripcion:HTMLInputElement, valor:HTMLInputElement, select:HTMLInputElement){
    this.ingresoService.agregarIngreso(new Ingreso(descripcion.value,Number(valor.value)));
    console.log(descripcion + " " + valor);
  }
}
