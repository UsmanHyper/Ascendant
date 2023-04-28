import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MyChannelsComponent } from "./my-channels.component";
import { MaterialModule } from "src/app/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
    declarations: [
        MyChannelsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,


    ],
    exports: [
        MyChannelsComponent
    ]
})
export class MychannelModule { }