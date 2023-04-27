import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { LineChartComponent } from "./line-chart/line-chart.component";
import { StreamChartComponent } from "./stream-chart/stream-chart.component";
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FlexLayoutModule,
        NgSelectModule,
        ReactiveFormsModule
    ],
    declarations: [
     
        LineChartComponent,
        StreamChartComponent
    ],
    exports: [
     
        LineChartComponent,
        StreamChartComponent
    ]
})
export class GraphsModule { }