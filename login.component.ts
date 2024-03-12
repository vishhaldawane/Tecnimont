import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
   // this.isUserLoggedIn();
  }

  isLogin: boolean=false;
  buttonLabel:string="Login";

  isUserLoggedIn() {
    if(this.isLogin==false) {
      this.isLogin=true;
      console.log('User is logged in');
      this.buttonLabel="Logout";
    }
    else {
      this.isLogin=false;
      console.log('User is not Logged in');
      this.buttonLabel="Login";

    }
  }
  num1:number=0;
  num2:number=0;
  message:string='';
  findIt() {
    if(this.num1>10)
      this.message=' greater than 10';
    else if (this.num1<10)
      this.message=' lesser than 10';
    else
      this.message=' equal to 10';
  }

  ngOnInit(): void {
  }

}
