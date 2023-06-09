import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsModule } from 'src/app/shared/cards/cards-module';


@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        FlexLayoutModule, 
        CardsModule,
        
    ]
})
export class DashboardModule { }
