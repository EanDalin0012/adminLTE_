import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Register1000Component } from './register1000/register1000.component';

const routes: Routes = [
    { path: '', redirectTo: 'tab', pathMatch: 'full' },
    { path: 'main-category', component: Register1000Component},
    { path: 'sub-category', component: Register1000Component},
    { path: 'company', component: Register1000Component},
    { path: 'proudct', component: Register1000Component},
    { path: 'supplier', component: Register1000Component},
    { path: 'home', component: Register1000Component},
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
