import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent } //, canActivate: [AuthGuardService]
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class DashboardRoutingModule { }
