import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderPageComponent } from './order-page.component';
import { MaterialModule } from 'src/app/components/shared/module/material.module';


@NgModule({
  declarations: [OrderPageComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule
  ]
})
export class OrderModule { }
