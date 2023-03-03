import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { setCookie } from 'src/app/utils/cookie-utils';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName!: string;
  userPassWord!: string;
  newUserMail!: string;
  newUserPassWord!: string;
  newUserName!: string;
  newUserPhoneNumber!: number;
  showLogin: boolean = true;
  constructor(private loginService: LoginService, private router: Router) {}
  showSignUpComponent() {
    this.showLogin = false;
  }
  showLoginComponent() {
    this.showLogin = true;
  }
  onSubmit() {
    const loginDetails = {
      userName: this.userName,
      userPassWord: this.userPassWord,
    };
    this.loginService.login(loginDetails).subscribe((loginResponse) => {
      console.log(loginResponse);
      setCookie('token', loginResponse.authenticationToken);
      localStorage.setItem('userId',loginResponse.userId);
      console.log(loginResponse.userId);
      this.router.navigate(['home']);
    });
  }
  signUp() {
    console.log(this.newUserName);
    console.log(this.newUserPassWord);
    console.log(this.newUserMail);
    console.log(this.newUserPhoneNumber);
    this.loginService.signup({
      newUserName:this.newUserName,
      newUserPassword:this.newUserPassWord,
      newUserMail: this.newUserMail,
      newUserPhoneNumber: this.newUserPhoneNumber
    }).subscribe(_ => {
      console.log('signup done');
      
    });
  }
}
