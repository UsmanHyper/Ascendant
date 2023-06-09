import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-dashboard',
    templateUrl: './main-dashboard.component.html',
    styleUrls: ['./main-dashboard.component.scss'],
    animations: [
        trigger('searchContainerState', [
            state('collapsed', style({ width: '90px' })),
            state('expanded', style({ width: '210px' })),
            // transition('expanded <=> collapsed', animate('300ms ease-in-out'))
        ]),
    ]
})
export class MainDashboardComponent implements OnInit {
    toggleMenu: boolean;

    constructor() {
        this.toggleMenu = true;
    }

    ngOnInit(): void {
    }

    onToggleMenu(ev: any) {
        this.toggleMenu = ev;
    }

}
