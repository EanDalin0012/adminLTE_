import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout/layout.component';


const routes: Routes = [
    { path: '', redirectTo: 'tab', pathMatch: 'full' },
    { path: 'home', component: LayoutComponent},
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
