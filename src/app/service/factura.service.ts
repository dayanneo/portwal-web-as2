import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Factura {
  tipo;
  numero;
  fecha;
  total;
  estado;

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
}





