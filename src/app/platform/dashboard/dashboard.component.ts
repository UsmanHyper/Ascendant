import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { DataSharingService } from 'src/app/services/data-sharing-servcie';
import { Subject } from 'rxjs';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
    loadingCards: boolean;
    loadingGraphs: boolean;
    graphsData: any;
    user: any;
    lastUpdatedTime: any;
    customerid: any;
    map: any;
    cityArray: any[];
    cardsSubFlow: any[];
    singleCity: any
    areaArray: any
    singleArea: any
    deviceArray: any
    singleDevice: any
    selectFilterdataonMaps: any = null;
    selectFilterdataOption: any = null;
    @Input() selectcardfilter: any
    flowdata: FormControl;
    cardFlowdata: FormControl;
    subflow: FormControl;
    cardSubflow: FormControl;
    tempDayFilter: any;
    gasesDayFilter: any;
    flows: any[];
    cardsFlow: any[];
    // graphFlow: any[];
    cardsData: any[];
    subflowData: any[];
    tempGraphData: any[];
    gasesGraphData: any[];

    constructor(
        private apiService: ApiService,
        private toastrService: ToastrService,
        private dss: DataSharingService,

    ) {
        this.tempDayFilter = '1';
        this.gasesDayFilter = '1';
        this.loadingCards = false;
        this.loadingGraphs = false;
        let loggedInUser: any = localStorage.getItem('user');
        this.user = JSON.parse(loggedInUser);
        if (this.user) {
            this.customerid = this.user.customer['customer_id'];
        }
        this.flowdata = new FormControl('city')
        this.subflow = new FormControl(null);
        this.cardFlowdata = new FormControl('city')
        this.cardSubflow = new FormControl(null);

        this.flows = [
            { id: 'city', name: 'By City' },
            { id: 'area', name: 'By Area' },
            { id: 'device', name: 'By Device' }
        ]
        this.cardsFlow = [
            { id: 'city', name: 'By City' },
            { id: 'area', name: 'By Area' },
            { id: 'device', name: 'By Device' }
        ]
        this.cityArray = []
        this.cardsData = [
            { code: 'CTC', title: ' Temperature ', class: 'col-lg-4', value: 0 + "°C" },
            { code: 'CHC', title: 'Humidity', class: 'col-lg-2', value: 0 + "%" },
            { code: 'PM10C', title: 'PM10', class: 'col-lg-2', value: 0 },
            { code: 'PM2C', title: 'PM2.5', class: 'col-lg-2', value: 0 },
            { code: 'AQIC', title: 'AQI', class: 'col-lg-2', value: 'Not Good' },
        ]
        this.cardsSubFlow = []
        this.subflowData = [];
        this.tempGraphData = [];
        this.gasesGraphData = [];

    }

    ngOnInit(): void {
        this.getCityList();
        this.subflow?.setValue("all")
        this.getCardsCityList();
        // this.onSelectSubFlow(1, 'cards');
        // this.onSelectSubFlow(1, 'map');
    }

    // For Map dropdown
    getCityList() {
        this.loadingGraphs = true;
        const slug = `${environment.baseUrlSE}api/location/city`;
        this.apiService.get(slug).subscribe((resp: any) => {
            this.cityArray = resp.data['data'];
            this.subflow?.setValue("all")
            this.onSelectSubFlow(1, 'map')

        }, (err: any) => {
            this.loadingGraphs = false;
            this.toastrService.error(err.error['message']);
        });
    }

    getAreaList() {
        this.loadingGraphs = true;
        const slug = `${environment.baseUrlSE}api/location/area`;
        this.apiService.get(slug).subscribe((resp: any) => {
            this.cityArray = resp.data['data'];
            this.subflow?.setValue("all")
            this.onSelectSubFlow(2, 'map')


        }, (err: any) => {
            this.loadingGraphs = false;
            this.toastrService.error(err.error['message']);
        });
    }

    getDeivceList() {
        this.loadingGraphs = true;
        const slug = `${environment.baseUrlSE}api/device/device-list`;
        this.apiService.get(slug).subscribe((resp: any) => {
            this.cityArray = resp.data['data'];
            this.subflow?.setValue("all")
            this.onSelectSubFlow(3, 'map')

        }, (err: any) => {
            this.loadingGraphs = false;
            this.toastrService.error(err.error['message']);
        });
    }

    // FOr Cards Dropdowns
    getCardsCityList() {
        this.loadingCards = true;
        const slug = `${environment.baseUrlSE}api/location/city`;
        this.apiService.get(slug).subscribe((resp: any) => {
            this.cardsSubFlow = resp.data['data'];
            this.cardSubflow?.setValue(this.cardsSubFlow[0]?.id);
            this.onSelectSubFlow(this.cardSubflow, 'cards')
        }, (err: any) => {
            this.loadingCards = false;
            this.toastrService.error(err.error['message']);
        });
    }

    getCardsAreaList() {
        this.loadingCards = true;
        const slug = `${environment.baseUrlSE}api/location/area`;
        this.apiService.get(slug).subscribe((resp: any) => {
            this.cardsSubFlow = resp.data['data'];
            this.cardSubflow?.setValue(this.cardsSubFlow[0]?.id);
            this.onSelectSubFlow(this.cardSubflow, 'cards')
        }, (err: any) => {
            this.loadingCards = false;
            this.toastrService.error(err.error['message']);
        });
    }

    getCardsDeivceList() {
        this.loadingCards = true;
        const slug = `${environment.baseUrlSE}api/device/device-list`;
        this.apiService.get(slug).subscribe((resp: any) => {
            this.cardsSubFlow = resp.data['data'];
            this.cardSubflow?.setValue(this.cardsSubFlow[0]?.device_id)
            this.onSelectSubFlow(this.cardsSubFlow[0]?.device_id, 'cards')

        }, (err: any) => {
            this.loadingCards = false;
            this.toastrService.error(err.error['message']);
        });
    }

    onSelectMainFlow(event: any, type: string) {
        if (type === 'map') {
            if (event === 'city') {
                this.subflow?.reset()
                this.getCityList()
            } else if (event === 'area') {
                this.subflow?.reset()
                this.getAreaList()
            } else if (event === 'device') {
                this.subflow?.reset()
                this.getDeivceList()
            }

        } else if (type === 'cards') {
            if (event === 'city') {
                this.getCardsCityList()
            } else if (event === 'area') {
                this.getCardsAreaList()
            } else if (event === 'device') {
                this.getCardsDeivceList()
            }
        }
    }

    onSelectSubFlow(event: any, type: string, dateFilter?: any) {
        this.loadingGraphs = true;
        if (type === 'map') {
            const mf = this.flowdata.value;
            const sf = this.subflow.value;


            let slug = '';
            if (mf === 'city') {
                slug = `${environment.baseUrlSE}api/device?city=${sf}`;
                this.selectFilterdataOption = this.flowdata.value
            } else if (mf === 'area') {
                slug = `${environment.baseUrlSE}api/device?area=${sf}`;
                this.selectFilterdataOption = this.flowdata.value
            } else if (mf === 'device') {
                slug = `${environment.baseUrlSE}api/device?device=${sf}`;
                this.selectFilterdataOption = this.flowdata.value
            } else {
                slug = `${environment.baseUrlSE}api/device/city=all`;
            }
            this.apiService.get(slug).subscribe((resp: any) => {
                this.loadingGraphs = false;
                this.selectFilterdataonMaps = resp.data;
                this.selectFilterdataOption = mf
            }, (err: any) => {
                this.loadingGraphs = false;
                this.toastrService.error(err.error['message']);
            });

        } else if (type === 'cards') {
            const cmf = this.cardFlowdata.value;
            const csf = this.cardSubflow.value;
            let cardsSlug = '';

            if (cmf === 'city') {
                cardsSlug = `${environment.reportBaseUrl}api/analytics/cards?dashboard_id=SEMD&use_case_id=11&city_id=${csf}`
            } else if (cmf === 'area') {
                cardsSlug = `${environment.reportBaseUrl}api/analytics/cards?dashboard_id=SEMD&use_case_id=11&area_id=${csf}`;
            } else {
                cardsSlug = `${environment.reportBaseUrl}api/analytics/cards?dashboard_id=SEMD&use_case_id=11&device_id=${csf}`;
            }
            this.getCards(cardsSlug);
            this.getTemperatureGraph();
            this.getGasesGraph();
        }
    }

    getCards(slug: string) {
        this.loadingCards = true;
        this.apiService.get(slug).subscribe((resp: any) => {
            const dt = resp.data;
            if (dt?.length > 0) {
                dt.forEach((ele: any) => {
                    this.cardsData.forEach((elem: any) => {
                        if (ele.code === elem.code) {
                            if (elem.code === 'CHC') {
                                elem.value = !!ele.data && ele.data !== 'N/A' ? parseFloat(ele.data).toFixed(2) + "%" : 'N/A';
                            } else if (elem.code === 'CTC') {
                                elem.value = !!ele.data && ele.data !== 'N/A' ? parseFloat(ele.data).toFixed(2) + "°C" : 'N/A';
                            } else if (elem.code === 'PM10C') {
                                elem.value = !!ele.data && ele.data !== 'N/A' ? parseFloat(ele.data).toFixed(2) : 'N/A';
                            } else if (elem.code === 'PM2C') {
                                elem.value = !!ele.data && ele.data !== 'N/A' ? parseFloat(ele.data).toFixed(2) : 'N/A';
                            } else if (elem.code === 'AQIC') {
                                elem.value = ele.data['air_quality'] ; 
                            } else {
                                elem.value = ele.data
                            }
                        }
                    });
                });
            }
            this.loadingCards = false;
        }, (err: any) => {
            this.loadingCards = false;
            this.toastrService.error(err.error['message']);
        });
    }

    getTemperatureGraph() {
        this.loadingGraphs = true;
        const cmf = this.cardFlowdata.value;
        const csf = this.cardSubflow.value;
        let slug = '';
        if (cmf === 'city') {
            slug = `${environment.reportBaseUrl}api/analytics/graphs?dashboard_id=SEMD&use_case_id=11&graph_id=THG&city_id=${csf}&filter=${this.tempDayFilter}`;
        } else if (cmf === 'area') {
            slug = `${environment.reportBaseUrl}api/analytics/graphs?dashboard_id=SEMD&use_case_id=11&graph_id=THG&area_id=${csf}&filter=${this.tempDayFilter}`;
        } else {
            slug = `${environment.reportBaseUrl}api/analytics/graphs?dashboard_id=SEMD&use_case_id=11&graph_id=THG&device_id=${csf}&filter=${this.tempDayFilter}`;
        }
        this.apiService.get(slug).subscribe((resp: any) => {
            const dt = resp.data[0]['data'];
            dt.forEach((ele: any) => {
                if (!!ele) {
                    ele.temperature = ele.temperature ? (+ele.temperature).toFixed(2) : 0;
                    ele.humidity = ele.humidity ? (+ele.humidity).toFixed(2) : 0;
                }
            })
            this.tempGraphData = dt;
            this.loadingGraphs = false;
        }, (err: any) => {
            this.toastrService.error(err.error['message']);
            this.loadingGraphs = false;
        });
    }


    getGasesGraph() {
        this.loadingGraphs = true;
        const cmf = this.cardFlowdata.value;
        const csf = this.cardSubflow.value;
        let slug = '';
        if (cmf === 'city') {
            slug = `${environment.reportBaseUrl}api/analytics/graphs?dashboard_id=SEMD&use_case_id=11&graph_id=AQIG&city_id=${csf}&filter=${this.gasesDayFilter}`;
        } else if (cmf === 'area') {
            slug = `${environment.reportBaseUrl}api/analytics/graphs?dashboard_id=SEMD&use_case_id=11&graph_id=AQIG&area_id=${csf}&filter=${this.gasesDayFilter}`;
        } else {
            slug = `${environment.reportBaseUrl}api/analytics/graphs?dashboard_id=SEMD&use_case_id=11&graph_id=AQIG&device_id=${csf}&filter=${this.gasesDayFilter}`;
        }
        this.apiService.get(slug).subscribe((resp: any) => {
            const dt = resp.data[0]['data'];
            dt.forEach((ele: any) => {
                if (!!ele) {
                    ele.CO = ele.CO ? (+ele.CO).toFixed(2) : 0;
                    ele.NO2 = ele.NO2 ? (+ele.NO2).toFixed(2) : 0;
                    ele.O3 = ele.O3 ? (+ele.O3).toFixed(2) : 0;
                    ele.SO2 = ele.SO2 ? (+ele.SO2).toFixed(2) : 0;

                }
            })
            this.gasesGraphData = dt;
            this.loadingGraphs = false;
        }, (err: any) => {
            this.loadingGraphs = false;
            this.toastrService.error(err.error['message']);
        });
    }


    onGraphSignals(ev: any) {
        if (ev.type === 'onTempGraph') {
            this.tempDayFilter = ev?.data;
            this.getTemperatureGraph();
        } else {
            this.gasesDayFilter = ev?.data;
            this.getGasesGraph();
        }
    }
}