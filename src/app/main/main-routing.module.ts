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
      { path: 'import-product',
        loadChildren: () => import('../import-product/import-product.module').then( m => m.ImportProductModule)
      }
    ]
  },
  { path: '',
    children: [
      { path: 'sale',
        loadChildren: () => import('../sale/sale.module').then( m => m.SaleModule)
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
