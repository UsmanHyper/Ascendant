import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
    cardsData: any

    constructor() {
        this.cardsData = [
            { name: 'Total Hotels', class: 'connectRoomtype', value: 220 , img:'../../../assets/images/hotel.svg'},
            { name: 'Today Bookings', class: 'connectRoomrate ', value: 412 , img:'../../../assets/images/bed.svg' },
            { name: 'Total Channels', class: 'connectRoomrate ', value: 510 , img:'../../../assets/images/channel.svg' },
        ]
    }
    ngOnInit(): void {

    }
    all(){

    }
    guestHouse(){
    }
    appartments(){
    }
    rooms(){
    }
    honeymoonPackages(){
    }
    holidaysPackages(){
    }
}
