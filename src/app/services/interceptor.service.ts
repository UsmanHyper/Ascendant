import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from "rxjs/operators";
import { environment } from '../../environments/environment';


@Injectable()
export class InterceptorService implements HttpInterceptor {

	constructor(private router: Router) { }
	// private auth: AuthService,
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// Get the auth header from the service.
		let token = null;
		let authHeader = null;
		token = localStorage.getItem('token');

		const userms = environment.userms;
		const baseUrl = environment.baseUrl;
		const baseUrlSE = environment.baseUrlSE;
		const signalR = environment.signalR;

		if (!!token) {
			authHeader = token;
		}

		// Clone the request to add the new header.
		let cloneReq: any = null;
		if (authHeader != null) {
			let headers = req.headers
			.set("Authorization", "Token " + authHeader)
			
			if (req.url.includes(signalR)) {
				cloneReq = req.clone({ url: req.url });
			} else if (req.url.includes(userms) || req.url.includes(baseUrlSE) || req.url.includes(baseUrl)) {
				let headers = req.headers
				.set("Authorization", "Token " + authHeader)
				.set("User-Platform", 'WEB')
				.set("OS", "WEB")
				.set("use-case", "11");
				let URL = this.getBaseUrl(req.url);
				cloneReq = req.clone({ headers: headers, url: URL });
			} else {
				let URL = this.getBaseUrl(req.url);
				cloneReq = req.clone({ headers: headers, url: URL });
			}
		} else {
			let headers = req.headers
            .set("User-Platform", 'WEB')
            .set("OS", "WEB")
            .set("use-case", "11");
			let URL = this.getBaseUrl(req.url);
			cloneReq = req.clone({ headers: headers, url: URL });
		}

		// Pass on the cloned request instead of the original request.
		return next.handle(cloneReq).pipe(
			tap((event => {
				if (event instanceof HttpResponse) {
				}
			}), err => {
				let error = err instanceof HttpErrorResponse;
				let status = err.error['status'];
				let statuses = [401, 2, 3, 11, 151, 153, 18, 300, 301, 227];
				if (error && (statuses.includes(status) || statuses.includes(err.status))) {
					this.router.navigateByUrl('');
					localStorage.removeItem('token');
				}
			}));
	}

	getBaseUrl(url: any) {
		if (url.indexOf(environment.userms) !== -1) {
			url = url.replace(environment.userms, environment.userBaseUrl);
		} else if (url.indexOf(environment.reportms) !== -1) {
			url = url.replace(environment.reportms, environment.baseUrlSE);
		// } else if (url.indexOf(environment.customerms) !== -1) {
		// 	url = url.replace(environment.customerms, environment.customerBaseUrl);
		// } else if (url.indexOf(environment.inventoryms) !== -1) {
		// 	url = url.replace(environment.inventoryms, environment.inventoryBaseUrl);
		}

		return url;
	}
}
