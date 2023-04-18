import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent implements OnInit {

  validateForm!: FormGroup;
  emailPattern = '^[A-Za-z0-9._-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}$';
  startedClass = false;
  email: any;
  otp: string = ''
  password: any;
  completedClass = false;
  preventAbuse = false;
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 5,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    FormControlName: 'otp',
    inputStyles: {
      'width': '50px',
      'height': '50px',
      'margin-right': '5px',
      'margin-left': '5px',
    }

  };

  constructor(private titlePage: Title, private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {


    this.validateForm = new FormGroup({
      otp: new FormControl(null, [Validators.required]),

    });
    // this.validateForm = this.fb.group({
    //   otp: [null, [ Validators.required,]],

    // });
    this.titlePage.setTitle('Verify Account');
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



  submitSignIn() {
    console.log(' the form ', this.validateForm.value);
    const body = {
      otp: this.validateForm.controls['otp'].value,
    };

    // this.router.navigate(['/home']);

  }


  onOtpChange(otp: any) {
    this.otp = otp;
    if (this.otp.length === 5) {
      this.validateForm.get('otp')?.setValue(this.otp);
    }
    else{
      this.validateForm.reset()
    }


  }
}