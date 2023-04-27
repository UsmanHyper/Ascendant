import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from "./cards.component";


@NgModule({
    declarations: [
        CardsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        CardsComponent
    ]
})
export class CardsModule { }