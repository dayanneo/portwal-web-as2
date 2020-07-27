import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturaDataComponent } from './factura-data/factura-data.component';


const routes: Routes = [
 { path: 'facturas', component: FacturaDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
