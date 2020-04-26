import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SBSharedModule } from '../shared/sbshare.module';
import { Sale1000Component } from './sale1000/sale1000.component';
import { Sale1100Component } from './sale1100/sale1100.component';
import { Sale1200Component } from './sale1200/sale1200.component';
import { SaleRoutingModule } from './sale-routing.module';



@NgModule({
  declarations: [
    Sale1000Component,
    Sale1100Component,
    Sale1200Component
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    SBSharedModule
  ],
  entryComponents: [
    Sale1100Component,
    Sale1200Component
  ]
})
export class SaleModule {
  constructor() {
    console.log('home module worked');
  }
 }
