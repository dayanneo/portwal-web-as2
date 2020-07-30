import { Component, OnInit } from '@angular/core';
import { MatFormField, MatLabel, MatFormFieldModule} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide: boolean = true ;
  asignado=true;
  usua: string; 

  constructor(/* private matField: MatFormField,
              private matLabel: MatLabel,
              private matIcon: MatIcon */) { }

  ngOnInit(): void {
  }

  /* verEmpresa(us:string,passwd: string ){
    /* console.log(this.usua = document.getElementById(us)); */
    /* console.log(passwd);
    var valor = document.getElementById(us).values;
    document.getElementById("txt").innerHTML=valor;
    this.asignado=false;
  }  */

}
