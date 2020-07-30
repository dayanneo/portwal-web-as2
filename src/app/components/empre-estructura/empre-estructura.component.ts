import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { EmpresasCardsService } from '../../services/empresas-cards.service';
import { EmpresasInt } from '../../interfaces/empresas-data.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empre-estructura',
  templateUrl: './empre-estructura.component.html',
  styleUrls: ['./empre-estructura.component.css']
})
export class EmpreEstructuraComponent implements OnInit {
  
  /* empresas: EmpresasInt[] =[];
  termino: string; */
  @Input() empresa: any = {};
  @Input() empresas: EmpresasInt[] =[];
  @Input() index: number;

  @Output() empresaSeleccionado: EventEmitter<number>;
  
  constructor(
              private router: Router) { 
                this.empresaSeleccionado = new EventEmitter(); 
              }

  ngOnInit(): void {
  }

  verFactura(){
    //  console.log(this.index);
     this.router.navigate(['/home', this.index]);
     // this.heroesSeleccionado.emit(this.index);
  }

}
