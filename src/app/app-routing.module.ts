import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelLayoutComponent } from './core/layout/hotel-layout/hotel-layout.component';


const routes: Routes = [

  {path: "", loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},

  {
    path: 'hotel',
    component: HotelLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'table',
        loadChildren: () => import('./modules/table/table.module').then(m => m.TableModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'bill',
        loadChildren: () => import('./modules/bill/bill.module').then(m => m.BillModule)
      },


    ]
  },

  // { path: '', component: HotelLayoutComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
