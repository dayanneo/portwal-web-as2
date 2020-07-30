import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Factura {
  tipo;
  numero;
  fecha;
  total;
  estado;

  tipo1;
  numero1;
  fecha1;
  total1;
  estado1;


}



@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }
  getFacturas() {
    return this.http.get<any>('assets/facturas.json')
      .toPromise()
      .then(res => <Factura[]>res.data)
      .then(data => { return data; });
    }

    getFacturas1() {
    return this.http.get<any>('assets/facturas2.json')
      .toPromise()
      .then(res => <Factura[]>res.data)
      .then(data => { return data; });
    }
}





