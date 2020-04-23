import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign', pathMatch: 'full' },
  { path: 'sign', loadChildren: () => import('./sign/sign.module').then( m => m.SignModule) },
  { path: 'main', component: PagesComponent, loadChildren: () => import('./main/main.module').then( m => m.MainModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
