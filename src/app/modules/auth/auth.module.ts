import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import { AdminLoginFormComponent } from './admin-login-form/admin-login-form.component';

import { MaterialModule } from 'src/app/components/shared/module/material.module';


@NgModule({
  declarations: [LoginFormComponent, SignFormComponent, AdminLoginFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
