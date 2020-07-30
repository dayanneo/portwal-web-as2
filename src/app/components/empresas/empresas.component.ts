import { Component, OnInit, Input } from '@angular/core';
import { EmpresasInt } from '../../interfaces/empresas-data.interface';
import { EmpresasCardsService } from '../../services/empresas-cards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  busco = false; 

  empresas: EmpresasInt [] = [];
  termino: string;

  constructor(public serviceEmpresas : EmpresasCardsService,
              private activated: ActivatedRoute) { 

  }

  ngOnInit(): void {

  }

  buscar (termino: string){
    console.log(termino);
    this.activated.params.subscribe(params => {
      // this.termino = (params ['nombre']);
      this.empresas = this.serviceEmpresas.buscarEmpresa(termino);
      // console.log(params ['nombre']);
      this.busco = true;
      console.log(this.empresas);
    });
  }
}

