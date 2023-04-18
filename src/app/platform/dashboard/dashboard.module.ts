import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GraphsModule } from 'src/app/shared/graphs/graphs-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsModule } from 'src/app/shared/cards/cards-module';
import { MapsModule } from "../../shared/maps/maps-module";
import { GoogleMapsModule } from 'src/app/shared/googleMaps/googleMaps-module';
@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        NgbModule,
        FlexLayoutModule,
        BreadcrumbsModule,
        NgSelectModule,
        GraphsModule,
        CardsModule,
        MapsModule,
        GoogleMapsModule
    ]
})
export class DashboardModule { }
