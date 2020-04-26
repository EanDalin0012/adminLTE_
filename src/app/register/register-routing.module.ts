import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Register1000Component } from './register1000/register1000.component';
import { Register2000Component } from './register2000/register2000.component';
import { Register3000Component } from './register3000/register3000.component';
import { Register4000Component } from './register4000/register4000.component';
import { Register5000Component } from './register5000/register5000.component';

const routes: Routes = [
    { path: '', redirectTo: 'tab', pathMatch: 'full' },
    { path: 'main-category',  component: Register2000Component},
    { path: 'sub-category',   component: Register1000Component},
    { path: 'company',        component: Register3000Component},
    { path: 'proudct',        component: Register4000Component},
    { path: 'supplier',       component: Register5000Component},
    { path: 'home',           component: Register1000Component},
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
