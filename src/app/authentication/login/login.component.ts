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
  userExists: string | undefined;
  showLoginErorr: boolean = false;
  showLoginErorrMessage: string = '';
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
      if (
        loginResponse.username != 'failed user name' &&
        loginResponse.authenticationToken != '"failed user details' &&
        loginResponse.userId != null
      ) {
        console.log(loginResponse);
        setCookie('token', loginResponse.authenticationToken);
        localStorage.setItem('userId', loginResponse.userId);
        console.log(loginResponse.userId);
        this.router.navigate(['home']);
      } else {
        this.showLoginErorrMessage = 'Invalid Username or Password';
        this.showLoginErorr = true;
        setTimeout(() => {
          this.showLoginErorr = false;
        }, 5000);
      }
    });
  }
  signUp() {
    this.loginService
      .checkIfUserExists({
        newUserName: this.newUserName,
        newUserPassword: this.newUserPassWord,
        newUserMail: this.newUserMail,
        newUserPhoneNumber: this.newUserPhoneNumber,
      })
      .subscribe((val: any) => {
        console.log(val.userRegistercheck);
        this.userExists = val.userRegistercheck;
        if (this.userExists == 'success') {
          this.showLoginErorrMessage = 'User already registered';
          this.showLoginErorr = true;
          setTimeout(() => {
            this.showLoginErorr = false;
          }, 5000);
        } else if (this.userExists == 'failed') {
          this.loginService.signup({
            newUserName: this.newUserName,
            newUserPassword: this.newUserPassWord,
            newUserMail: this.newUserMail,
            newUserPhoneNumber: this.newUserPhoneNumber,
          });
          alert('user registered');
        }
      });
  }
}
