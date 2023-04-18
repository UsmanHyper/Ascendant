import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent , SucessDialogboxComponent} from './change-password/change-password.component';
import { ForgotPasswordComponent, DialogboxComponent } from './forgot-password/forgot-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from '../../material.module';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
    declarations: [
        LoginComponent,
        ChangePasswordComponent,
        ForgotPasswordComponent,
        DialogboxComponent,
        VerifyAccountComponent,
        SucessDialogboxComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        LoginRoutingModule,
        FlexLayoutModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        MatDialogModule,
        MaterialModule,
        NgOtpInputModule,

    ]
})
export class LoginModule { }