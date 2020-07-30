import { Component, OnInit } from '@angular/core';
import { EmpresasCardsService } from '../../services/empresas-cards.service';
import { EmpresasInt } from '../../interfaces/empresas-data.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  empresas: EmpresasInt [] = [];

  empresasE: EmpresasInt [] = [];
  termino: string;
  busco = false; 

  constructor(private empresaServicio: EmpresasCardsService,
              private activated: ActivatedRoute) { 
                this.empresas = this.empresaServicio.datosE;
              }

  ngOnInit(): void {
  }
  
  buscar (termino: string){
    console.log(termino);
    this.termino = termino;

    this.activated.params.subscribe(params => {
      // this.termino = (params ['nombre']);
      this.empresasE = this.empresaServicio.buscarEmpresa(termino);
      // console.log(params ['nombre']);
      // this.busco = this.empresaServicio.busco = true;
      this.busco = true;
      console.log(this.empresasE);
    });
  } 

}
