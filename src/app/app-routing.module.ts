import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyTokenComponent } from './core/login/verify-token/verify-token.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/login/login.module').then(m => (m.LoginModule))
  },
  {
    path: 'verify-token',
    component: VerifyTokenComponent
  },
  // {
  //   path: 'se',
  //   loadChildren: () => import('./platform/platform.module').then(m => (m.PlatformModule))
  // },
  {
    path: '**',
    redirectTo: 'se',
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }