import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DataSharingService } from 'src/app/services/data-sharing-servcie';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-global-search',
    templateUrl: './global-search.component.html',
    styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {

    searchControl: FormControl;
    searchResult: any[];
    users: any[] = [];
    reports: any[] = [];
    data: any[];
    showResult: boolean;
    loading: boolean;
    customerId:number;

    constructor(
        private apiService: ApiService,
        private router: Router,
        private ds: DataSharingService
    ) {
        this.customerId = 0;
        this.searchControl = new FormControl('');
        this.searchResult = [];
        this.data = [
            // { id: 1, title: 'Jawwad', url: '/qf/users', type: 'user', value: 1 },
            // { id: 2, title: 'Jawad', url: '/qf/statistics-report', type: 'gate' },
            // { id: 3, title: 'Umer', url: '/qf/users', type: 'user' },
            // { id: 4, title: 'Umer', url: '/qf/statistics-report', type: 'gate' },
            // { id: 5, title: 'Gate 1', url: '/qf/statistics-report', type: 'gate' },
        ];

        this.showResult = false;
        this.loading = false;
    }

    ngOnInit(): void {
        this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged()).subscribe((value) => {
            if (value != null) {
                this.loading = true;
                if (value !== '') {
                    // this.getUsers(value);
                    // this.getReport(value);
                }
                
                setTimeout(() => {
                    this.searchResult = this.users.concat(this.reports);
                    this.loading = false;
                    if (value?.length >= 1 && this.searchResult.length > 0) {
                        this.showResult = true;
                    } else {
                        this.showResult = false;
                    }
                }, 1000);
            }
        });

        let u: any = localStorage.getItem('user');
        const user = JSON.parse(u);
        this.customerId = user.customer['customer_id'];
    }

    // onSearch2(val: string) {
    //     let searchVal = this.searchControl.value;
    //     this.searchResult = this.data.filter(ele => {
    //         return ele.title.match(new RegExp(val, 'gi'));
    //     });

    //     if (searchVal.length >= 2 && this.searchResult.length > 0) {
    //         this.showResult = true;
    //     } else {
    //         this.showResult = false;
    //     }
    // }

    onSelectResult(item: any) {
        const val = item.search_text;
        const type = item.type;

        if (type === 'user') {
            this.ds.sendSignal(val);
            this.gotoPage('/va/users', val);
        } else if (type === 'location') {
            this.ds.sendSignal(val);
            this.gotoPage('/va/statistics-report', val);
        } else if (type === 'group') {
            this.ds.sendSignal(val);
            this.gotoPage('/va/group', val);
        }
    }
    
    gotoPage(page: string, value?: any) {
        this.router.navigateByUrl(page);
        if (!!value) {
            localStorage.setItem('route-data', value);
        }

        this.showResult = false;
        this.searchControl.reset();
    }

    // getUsers(val: any) {
    //     this.users = [];
    //     const slug = `${environment.userms}/users/global-search?search_text=${val}`;

    //     this.apiService.get(slug).subscribe((resp: ApiResponse) => {
    //         this.users = resp.data;
    //     }, (err: any) => {
    //         this.toastrService.error(err.error['message'], 'Error getting users', {
    //             progressBar: true, progressAnimation: 'decreasing', timeOut: 3000
    //         });
    //     });
    // }

    // getReport(val: any) {
    //     this.reports = [];
    //     const slug = `${environment.reportms}qf-statistics/global-search?search_text=${val}&customer_id=${this.customerId}`;
    //     this.apiService.get(slug).subscribe((resp: ApiResponse) => {
    //         this.reports = resp.data;
    //     }, (err: any) => {
    //         this.toastrService.error(err.error['message'], 'Error getting reports', {
    //             progressBar: true, progressAnimation: 'decreasing', timeOut: 3000
    //         });
    //     });
    // }
}
