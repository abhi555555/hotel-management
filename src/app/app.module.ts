import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule} from './components/shared/module/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelLayoutComponent } from './core/layout/hotel-layout/hotel-layout.component';
import { AdminLayoutComponent } from './core/layout/admin-layout/admin-layout.component';
import { HotelHeaderComponent } from './components/shared/common/hotel-header/hotel-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelSidebarComponent } from './components/shared/common/hotel-sidebar/hotel-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelLayoutComponent,
    AdminLayoutComponent,
    HotelHeaderComponent,
    HotelSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
