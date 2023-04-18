import { Component, Input, OnInit } from '@angular/core';
i
// import { Menu } from 'src/app/interfaces/model';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    // menus: Menu[];
    @Input() isCollapsed: boolean;

    constructor(
       
    ) {
        this.isCollapsed = false;
        // this.menus = [];
    }

    ngOnInit(): void {
        // setTimeout(() => {
        //     let menu: any = localStorage.getItem('menu');
        //     this.menus = JSON.parse(menu);
        // }, 100);
        // this.getMenu();
    }

    // getMenu() {
    //     const slug = `${environment.userms}/users/menu-preferences`;
        
    //     return this.apiService.get(slug).subscribe((resp: any) =>
    //     {
    //         this.menus = resp.data;
    //         localStorage.setItem('menu', JSON.stringify(this.menus));
    //     }, (err: any) =>
    //     {
    //         this.toastrService.error(err.error['message'], 'Error',
    //         { progressAnimation: 'decreasing', progressBar: true, timeOut: 3000 });
    //     });
    // }

    // onSelectedItem(menu: Menu[], idx: number) {
    //     menu[idx].expanded = !menu[idx].expanded;
    //     for (let i = 0; i < menu.length; i++) {
    //         if (menu[idx].expanded) {
    //             menu[i].expanded = false;
    //             menu[idx].expanded = true;
    //         } else {
    //             menu[idx].expanded = false;
    //         }            
    //     }
    // }

}
