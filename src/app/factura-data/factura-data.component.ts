import { Component, OnInit } from '@angular/core';
import { FacturaService, Factura } from '../service/factura.service';


@Component({
  selector: 'app-factura-data',
  templateUrl: './factura-data.component.html',
  styleUrls: ['./factura-data.component.css']
})
export class FacturaDataComponent implements OnInit {
  facturas: Factura[]
  facturas1: Factura[]
  cols: any[];
  cols2: any[];
  totalRecords: number;

  constructor(private facturaService: FacturaService) { }

  ngOnInit() {
  this.facturaService.getFacturas().
      then(facturas => this.facturas = facturas)  ;


      this.cols=[
      {field:'tipo', header: 'Tipo Documento'},
      {field:'numero', header: 'Número'},
      {field:'fecha', header: 'Fecha de emisión'},
      {field:'total', header: 'Total'},
      {field:'estado', header: 'Estado'},
      ];
   

  this.facturaService.getFacturas1().
      then(facturas1 => this.facturas1 = facturas1)  ;

      this.cols2=[
      {field:'tipo1', header: 'Tipo Documento'},
      {field:'numero1', header: 'Número'},
      {field:'fecha1', header: 'Fecha de emisión'},
      {field:'total1', header: 'Total'},
      {field:'estado1', header: 'Estado'},
      ];

      this.totalRecords=this.facturas.length;
  }

}
