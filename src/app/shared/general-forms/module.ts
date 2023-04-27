import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { GeneralFormsComponent } from './general-forms.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [
        GeneralFormsComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FlexLayoutModule,
    ],
    exports: [
        GeneralFormsComponent,
    ]
})
export class GeneralFormModule { }
