import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MainDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
   
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    MainDashboardComponent
  ]
})
export class MainDashboardModule { }
