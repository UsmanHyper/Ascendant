import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'reset-password', component: ChangePasswordComponent },
  { path: 'verify-account', component: VerifyAccountComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }