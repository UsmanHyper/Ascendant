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

@NgModule({
    declarations: [
        ChannelManagementComponent,
        RoomAvailbilityComponent,
        RoomManagementComponent,
        PriceNPushChannelComponent,
        UserManagementComponent
    ],
    imports: [
        CommonModule,
        PlatformRoutingModule,
        MainDashboardModule,
        CardsModule
    ]
})
export class PlatformModule { }
