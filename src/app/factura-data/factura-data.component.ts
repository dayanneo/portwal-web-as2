import { Component, OnInit } from '@angular/core';
import { FacturaService, Factura } from '../service/factura.service';


@Component({
  selector: 'app-factura-data',
  templateUrl: './factura-data.component.html',
  styleUrls: ['./factura-data.component.css']
})
export class FacturaDataComponent implements OnInit {
  facturas: Factura[]
  cols: any[];
  totalRecords: number;

  constructor(private facturaService: FacturaService) { }

  ngOnInit() {
  this.facturaService.getFacturas().
      then(facturas => this.facturas = facturas);

      this.cols=[
      {field:'tipo', header: 'Tipo Documento'},
      {field:'numero', header: 'Número'},
      {field:'fecha', header: 'Fecha de emisión'},
      {field:'total', header: 'Total'},
      {field:'estado', header: 'Estado'},
      ];

      this.totalRecords=this.facturas.length;
  }

}
