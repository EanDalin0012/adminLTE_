import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportProduct1000Component } from './import-product1000/import-product1000.component';

const routes: Routes = [
    { path: '', redirectTo: 'import-product', pathMatch: 'full' },
    { path: 'import-product', component: ImportProduct1000Component},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportProductRoutingModule { }
