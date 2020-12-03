import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule} from './components/shared/module/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
// import { HotelLayoutComponent } from './core/layout/hotel-layout/hotel-layout.component';
// import { AdminLayoutComponent } from './core/layout/admin-layout/admin-layout.component';
// import { HotelHeaderComponent } from './components/shared/common/hotel-header/hotel-header.component';

// import { HotelSidebarComponent } from './components/shared/common/hotel-sidebar/hotel-sidebar.component';
import { HeaderComponent } from './components/shared/common/header/header.component';
import { SidebarComponent } from './components/shared/common/sidebar/sidebar.component';
import { HotelUserComponent } from './components/hotel-user/hotel-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    // HotelLayoutComponent,
    // AdminLayoutComponent,

    // HotelHeaderComponent,
    // HotelSidebarComponent,
    HeaderComponent,
    SidebarComponent,
    HotelUserComponent
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
