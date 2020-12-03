import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginFormComponent } from './admin-login-form/admin-login-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignFormComponent } from './sign-form/sign-form.component';


const routes: Routes = [
  { path: "", component: LoginFormComponent },
  { path: "signup", component: SignFormComponent },
  { path: "admin", component: AdminLoginFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
