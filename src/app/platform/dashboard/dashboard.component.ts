import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

    @Input() selectcardfilter: any

    constructor( ) {
    }
    ngOnInit(): void {

    }
}
