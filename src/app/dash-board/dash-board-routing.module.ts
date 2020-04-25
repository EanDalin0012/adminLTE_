import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoard1000Component } from './dash-board1000/dash-board1000.component';

const routes: Routes = [
    { path: '', redirectTo: 'DashBoard1000', pathMatch: 'full' },
    { path: 'DashBoard1000', component: DashBoard1000Component},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoarRoutingModule { }
