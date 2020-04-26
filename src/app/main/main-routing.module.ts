import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('../home/home.module').then( m => m.HomeModule)
  },
  { path: '',
    children: [ { path: 'register', loadChildren: () => import('../home/home.module').then( m => m.HomeModule) }]
  },
  { path: '',
    children: [
      { path: 'dash-board',
        loadChildren: () => import('../dash-board/dash-board.module').then( m => m.DashBoardModule)
      }
    ]
  },
  { path: '',
    children: [
      { path: 'import-product',
        loadChildren: () => import('../import-product/import-product.module').then( m => m.ImportProductModule)
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
