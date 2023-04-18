import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  validateForm!: FormGroup;
  emailPattern = '^[A-Za-z0-9._-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}$';
  startedClass = false;
  email: any;
  completedClass = false;
  preventAbuse = false;
  constructor(private titlePage: Title, private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required, Validators.pattern(this.emailPattern)]],
      
    });
    this.checkFuntion();
    this.titlePage.setTitle('Forgot Password');
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
    this.email = this.validateForm.get('email');
  }

  submit() {
    console.log(' the form ', this.validateForm.value);
    const body = {
      email: this.validateForm.controls['email'].value,
    };
    this.openDialog()
        // this.router.navigate(['/home']);
      
  }
  backTologin() {
   
        this.router.navigate(['']);
      
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  openDialog(){
    this.dialog.open(DialogboxComponent,{
      width: '694px',
      height:'332px'
    });
  }
  
  
}
@Component({
  selector: 'app-dialogbox',
  templateUrl: 'dialogbox.component.html',
  
 
})
export class DialogboxComponent {
  resend(){
    alert("1000")
  }
}
