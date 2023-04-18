import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {



  validateForm!: FormGroup;
  emailPattern = '^[A-Za-z0-9._-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}$';
  startedClass = false;
  checkPassword: any;
  password: any;
  completedClass = false;
  preventAbuse = false;

  public updateConfirmValidator(): void {
    setTimeout(() => this.validateForm.controls['checkPassword'].updateValueAndValidity());
    Promise.resolve().then(() => this.validateForm.controls['checkPassword'].updateValueAndValidity());
  }
  public confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };


  constructor(private titlePage: Title, private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      password: [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,16}$')]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
    });
    this.checkFuntion();
    this.titlePage.setTitle('Set-Password');
  }
  onStarted() {
    this.startedClass = true;
    setTimeout(() => {
      this.startedClass = false;
    }, 800);
  }

  onCompleted() {
    this.completedClass = true;
    setTimeout(() => {
      this.completedClass = false;
    }, 800);
  }

  checkFuntion() {
    this.password = this.validateForm.get('password');
    this.checkPassword = this.validateForm.get('checkPassword');
  }

  submitsetPassword() {
    console.log(' the form ', this.validateForm.value);
    const body = {
      password: this.validateForm.controls['password'].value,
      checkPassword: this.validateForm.controls['checkPassword'].value,
    };
    this.dialog.open(SucessDialogboxComponent, {
      width: '694px',
      height: '332px'
    });
    // this.router.navigate(['/home']);

  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('password') ? 'Not a valid email' : '';
  }
  getErrorMessagecheckPassword() {
    if (this.checkPassword.hasError('required')) {
      return 'You must enter a value';
    }

    return 'Two passwords that you enter is inconsistent!';
  }
}

@Component({
  selector: 'app-dialogbox',
  templateUrl: 'sucessdialogbox.component.html',


})
export class SucessDialogboxComponent {
  resend() {
    setTimeout(() => {
      this.router.navigate([''])
    }, 800);
   
  }


  constructor(private router: Router,) { }

}