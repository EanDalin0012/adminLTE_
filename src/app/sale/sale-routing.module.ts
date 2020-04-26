import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sale1000Component } from './sale1000/sale1000.component';

const routes: Routes = [
    { path: '', redirectTo: 'sale', pathMatch: 'full' },
    { path: 'sale', component: Sale1000Component},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
