import { Component, OnInit } from '@angular/core';
import { FACTURAS } from '../../facturas-prueba';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  facturas=FACTURAS;
  columnsToDisplay=['ID','Name','Valor'];
  columnsToDisplay1=['Total'];  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  total=this.total_calculo();
  constructor(private _formBuilder: FormBuilder) {}

  total_calculo():number{
    let total:number;
    total=0;
    for (let i=0; i<this.facturas.length;i++){
      total+=this.facturas[i].valor;
    }
    return total;
  }

  ngOnInit(){
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      firstCtrl: ['',Validators.requiredTrue]
    });
  }

}
