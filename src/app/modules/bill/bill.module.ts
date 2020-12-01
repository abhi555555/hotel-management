import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { BillPageComponent } from './bill-page.component';
import { MaterialModule } from 'src/app/components/shared/module/material.module';


@NgModule({
  declarations: [BillPageComponent],
  imports: [
    CommonModule,
    BillRoutingModule,
    MaterialModule
  ]
})
export class BillModule { }
