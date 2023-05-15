import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from "./table.component";
import { MaterialModule } from "src/app/material.module";


@NgModule({
    declarations: [
        TableComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [
        TableComponent
    ]
})
export class TableModule { }