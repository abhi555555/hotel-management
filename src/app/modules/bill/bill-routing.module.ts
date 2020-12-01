import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillPageComponent } from './bill-page.component';


const routes: Routes = [
  {path:"", component: BillPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule { }
