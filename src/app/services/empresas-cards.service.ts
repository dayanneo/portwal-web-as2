import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpresasInt } from '../interfaces/empresas-data.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpresasCardsService {

  datosE: EmpresasInt[]  = [];
  carga = true;
  nombreEmpresa: string;
  busco = false; 
  noCargar = false; 

  constructor(private http: HttpClient) {
      this.cargarEmpresas();
  }

  private cargarEmpresas(){
    this.http.get('assets/data/data-empresas.json')
    .subscribe((res: EmpresasInt[]) => {
        this.datosE = res;
        console.log(res);
        this.carga = false;
    });
    
  }

  getNombreEmpresa(termino: string){
    this.http.get('assets/data/data-empresas.json')
    .subscribe((res: EmpresasInt[]) =>{
      this.datosE = res;
      this.nombreEmpresa = this.datosE['nombre'];
      console.log(this.nombreEmpresa);
    });

    return this.nombreEmpresa;

  }

  getEmpresas(): EmpresasInt []{
    let empresas: EmpresasInt[] = [];
    this.http.get('assets/data/data-empresas.json')
    .subscribe((res: EmpresasInt[]) =>{
      empresas = res;
    });
    return empresas;
  }

  getEmpresa (idx: string): string {
    return this.datosE[idx];
}

  buscarEmpresa (termino: string): EmpresasInt[]{
    let empArreglo: EmpresasInt [] = [];
    termino = termino.toLowerCase();

    // for (let heroe of this.heroes) {
    for (let i = 0; i < this.datosE.length; i++) {
      let empresa = this.datosE[i];
      let nombre = empresa.nombre.toLowerCase();
      if( nombre.indexOf(termino) >= 0) {
        empresa.id = i;
        empArreglo.push(empresa);
       }
    }
    this.busco = true; 
    this.noCargar= true; 
    return empArreglo;
  }

}
