import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {
    is_authenticated: boolean = false;

    constructor(
        private auth: AuthService,
        private router: Router,
       
    ) {
        // console.log("inside auth guard.ts file")
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // let is_authenticated: boolean;
        let url = state.url.split('/');
        const reqUrl = url[url.length - 1];

        // let am: any = localStorage.getItem('menu');
        // const activeMenu = JSON.parse(am);

        let authenticUrl = '';

        // if (this.auth.isAuthenticated()) {
        //     activeMenu.forEach((element: any) => {
        //         if (element.is_parent) {
        //             element.sub_menu.forEach((subMenu: any) => {
        //                 if (reqUrl === subMenu.route) {
        //                     // this.is_authenticated = true;
        //                     authenticUrl = reqUrl;
        //                 }
        //             });
        //         } else {
        //             if (reqUrl === element.route) {
        //                 // this.is_authenticated = true;
        //                 authenticUrl = reqUrl;
        //             }
        //         }
        //     });
        //     // this.is_authenticated = true;

        //     // console.log(authenticUrl, reqUrl);
        //     if (reqUrl === authenticUrl) {
        //         this.is_authenticated = true;
        //     } else {
        //         this.is_authenticated = false;
        //         // this.router.navigate(['']);
        //         // this.toastr.error('', 'You are not allowed to redirect this Page', {
        //         //     progressBar: true, progressAnimation: 'decreasing', timeOut: 3000
        //         // });
        //     }
        // }
        // else {
        //     this.router.navigate(['']);
        //     this.is_authenticated = false;
        // }
        return this.is_authenticated;
    }
}
