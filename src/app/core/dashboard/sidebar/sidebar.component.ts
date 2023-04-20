import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    icon_active: string;
    class: string;
  }
  export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: '../../../../assets/images/dashbaord_black.png', icon_active: '../../../../assets/images/dashboard_white.png', class: '' },
    { path: '/channelManagement', title: 'Channel Management', icon: '../../../../assets/images/channel_black.png', icon_active: '../../../../assets/images/channel_white.png', class: '' },
    { path: '/roomAvailable', title: 'Room Availbility', icon: '../../../../assets/images/door_black.png', icon_active: '../../../../assets/images/door_white.png', class: '' },
    { path: '/roomManagement', title: 'Room Management', icon: '../../../../assets/images/door_black.png', icon_active: '../../../../assets/images/door_white.png', class: '' },
    { path: '/pricenpush', title: 'Price & Push Channnel', icon: '../../../../assets/images/lable_black.png', icon_active: '../../../../assets/images/lable_white.png', class: '' },
    { path: '/userMangment', title: 'User Management', icon: '../../../../assets/images/user_black.png', icon_active: '../../../../assets/images/user_white.png', class: '' },
    { path: '/logout', title: 'Log Out', icon: '../../../../assets/images/logout.png', icon_active: '../../../../assets/images/logout.png', class: 'bottomlink' },
  ]
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    // menus: Menu[];
    @Input() isCollapsed: boolean | any;
    menuItems: any[] = ROUTES;

    constructor(private titlePage: Title) {}
  
    ngOnInit(): void {
      this.titlePage.setTitle('Dashboard');
      // this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
  
    onButtonGroupClick($event: any) {
      let clickedElement = $event.target;
  
      if (clickedElement.nodeName === 'A') {
        let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector('.active');
        // if a Button already has Class: .active
        if (isCertainButtonAlreadyActive) {
          isCertainButtonAlreadyActive.classList.remove('active');
        }
  
        clickedElement.className += ' active';
      }
    }
    home() {}
    rec() {}
    set() {}
    employee() {}
    calender() {}
  
    pageTitle(title: string) {
      console.log(title);
      this.titlePage.setTitle(title);
    }
  }
  