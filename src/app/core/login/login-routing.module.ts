import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { MainDashboardComponent } from '../dashboard/main-dashboard/main-dashboard.component';
import { DashboardComponent } from 'src/app/platform/dashboard/dashboard.component';
import { ChannelManagementComponent } from 'src/app/platform/channel-management/channel-management.component';
import { RoomAvailbilityComponent } from 'src/app/platform/room-availbility/room-availbility.component';
import { RoomManagementComponent } from 'src/app/platform/room-management/room-management.component';
import { PriceNPushChannelComponent } from 'src/app/platform/price-n-push-channel/price-n-push-channel.component';
import { UserManagementComponent } from 'src/app/platform/user-management/user-management.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'reset-password', component: ChangePasswordComponent },
  { path: 'verify-account', component: VerifyAccountComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  // { path: 'dashboard', component: MainDashboardComponent },
{
  path: '',
  component: MainDashboardComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
    { path: 'channelManagement', component: ChannelManagementComponent, pathMatch: 'full' },
    { path: 'roomAvailable', component: RoomAvailbilityComponent, pathMatch: 'full' },
    { path: 'roomManagement', component: RoomManagementComponent, pathMatch: 'full' },
    { path: 'pricenpush', component: PriceNPushChannelComponent, pathMatch: 'full' },
    { path: 'userMangment', component: UserManagementComponent, pathMatch: 'full' },
    
  ],
},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }