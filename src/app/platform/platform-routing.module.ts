import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from '../core/dashboard/main-dashboard/main-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: MainDashboardComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: () => import('../platform/dashboard/dashboard.module').then(m => m.DashboardModule) },
            // { path: 'devices', loadChildren: () => import('./devices/devices.module').then(m => m.DevicesModule) },
            // { path: 'statistics-report', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
            // { path: 'group', loadChildren: () => import('./user-groups/user-groups-module').then(m => m.UserGroupsModule) },
            // { path: 'setting', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
        ]
    },
   
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlatformRoutingModule { }
