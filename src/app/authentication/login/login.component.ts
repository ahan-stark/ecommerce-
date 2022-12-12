import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { setCookie } from 'src/app/utils/cookie-utils';
import { Login } from './Login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName!: string;
  userPassWord!: string;
  constructor(private loginService: LoginService, private router: Router) {}
  onSubmit() {
    const loginDetails = {
      userName: this.userName,
      userPassWord: this.userPassWord,
    };
    this.loginService.login(loginDetails).subscribe(loginResponse=>{
      console.log(loginResponse);
      setCookie('token', loginResponse.authenticationToken);
      this.router.navigate(['products']);
      // this.loginService.getProducts().subscribe(res => {
      //   console.log(res);
        
      // })
    });


  }
}
