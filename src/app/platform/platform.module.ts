import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformRoutingModule } from './platform-routing.module';
import { MainDashboardModule } from '../core/dashboard/dashboard.module';
import { ChannelManagementComponent } from './channel-management/channel-management.component';
import { CardsModule } from "../shared/cards/cards-module";
import { RoomAvailbilityComponent } from './room-availbility/room-availbility.component';
import { RoomManagementComponent } from './room-management/room-management.component';
import { PriceNPushChannelComponent } from './price-n-push-channel/price-n-push-channel.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { MaterialModule } from '../material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MychannelModule } from '../shared/my-channels/my-channels-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableModule } from "../shared/table/table-module";


@NgModule({
    declarations: [
        ChannelManagementComponent,
        RoomAvailbilityComponent,
        RoomManagementComponent,
        PriceNPushChannelComponent,
        UserManagementComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        PlatformRoutingModule,
        MainDashboardModule,
        CardsModule,
        MaterialModule,
        MatNativeDateModule,
        BrowserModule,
        BrowserAnimationsModule,
        MychannelModule,
        FlexLayoutModule,
        TableModule
    ]
})
export class PlatformModule { }
