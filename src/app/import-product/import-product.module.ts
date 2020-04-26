import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportProduct1000Component } from './import-product1000/import-product1000.component';
import { ImportProduct1100Component } from './import-product1100/import-product1100.component';
import { ImportProduct1200Component } from './import-product1200/import-product1200.component';



@NgModule({
  declarations: [
    ImportProduct1000Component,
    ImportProduct1100Component,
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
    ImportProduct1200Component
  ]
})
export class ImportProductModule {
  constructor() {
    console.log('ImportProductModule worked');
  }
 }
