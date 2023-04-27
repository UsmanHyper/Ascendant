import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  emailPattern = '^[A-Za-z0-9._-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}$';
  startedClass = false;
  email: any;
  password: any;
  completedClass = false;
  preventAbuse = false;
  constructor(private titlePage: Title, private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      custEmail: [null, [Validators.email, Validators.required, Validators.pattern(this.emailPattern)]],
      custPassword: [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,16}$')]],
      remember: [true],
    });
    this.checkFuntion();
    this.titlePage.setTitle('Sign-In');
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
    this.email = this.validateForm.get('custEmail');
    this.password = this.validateForm.get('custPassword');
  }

  submitSignIn() {
    console.log(' the form ', this.validateForm.value);
    const body = {
      email: this.validateForm.controls['custEmail'].value,
      password: this.validateForm.controls['custPassword'].value,
    };
    this.router.navigateByUrl('/dashboard');
    // this.router.navigate(['/ac/dashboard']);

  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('custEmail') ? 'Not a valid email' : '';
  }
  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Password should be 6 to 16 digit long';
    }

    return 'Password should be 6 to 16 digit ';
  }

  onForgotPassword() {
    // localStorage.setItem('reqType', 'forgot');
    this.router.navigateByUrl('forgot-password');
  }
}