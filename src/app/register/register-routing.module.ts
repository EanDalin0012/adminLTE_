import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Register1000Component } from './register1000/register1000.component';
import { Register2000Component } from './register2000/register2000.component';
import { Register3000Component } from './register3000/register3000.component';
import { Register4000Component } from './register4000/register4000.component';
import { Register5000Component } from './register5000/register5000.component';
import { Register6000Component } from './register6000/register6000.component';
import { Register7000Component } from './register7000/register7000.component';
import { Register8000Component } from './register8000/register8000.component';
import { Register9000Component } from './register9000/register9000.component';

const routes: Routes = [
    { path: '', redirectTo: 'tab', pathMatch: 'full' },
    { path: 'sub-category',   component: Register1000Component},
    { path: 'main-category',  component: Register2000Component},
    { path: 'company',        component: Register3000Component},
    { path: 'proudct',        component: Register4000Component},
    { path: 'supplier',       component: Register5000Component},
    { path: 'order',          component: Register6000Component},
    { path: 'product-image',  component: Register7000Component},
    { path: 'user',  component: Register8000Component},
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
