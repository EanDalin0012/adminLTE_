import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportProduct1000Component } from './import-product1000/import-product1000.component';
import { ImportProduct1100Component } from './import-product1100/import-product1100.component';

const routes: Routes = [
    { path: '', redirectTo: 'import-product', pathMatch: 'full' },
    { path: 'import-product', component: ImportProduct1000Component},
    { path: 'add-import-product', component: ImportProduct1100Component},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportProductRoutingModule { }
