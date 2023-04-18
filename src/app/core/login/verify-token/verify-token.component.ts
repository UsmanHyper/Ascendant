import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify-token',
  template: '',
  // styleUrls: ['./verify-token.component.scss']
})
export class VerifyTokenComponent implements OnInit {
  token: any;
  constructor(private router: Router,private activatedRoute: ActivatedRoute,) { 
    this.token = this.activatedRoute.snapshot.queryParams['token']; 
  }

  ngOnInit(): void {
  }
  redirect() {
  
    // this.router.navigateByUrl(`/se/dashboard`);
  }

  async SignOut() {
    // const res = await this.fbAuth.signOut();
    // console.log(res);
  }
}
