import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sign1000Component } from './sign1000/sign1000.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Sign1000Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignRoutingModule {
}
