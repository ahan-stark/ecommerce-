import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { setCookie } from 'src/app/utils/cookie-utils';
import { Login } from './Login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  userName!: String;
  userPassWord!: String;
  constructor(private loginService: LoginService) {}
  onSubmit() {
    const loginDetails = {
      userName: this.userName,
      userPassWord: this.userPassWord,
    };
    this.loginService.login(loginDetails).subscribe(loginResponse=>{
      console.log(loginResponse);
      setCookie('token', loginResponse.authenticationToken);

      this.loginService.getProducts().subscribe(res => {
        console.log(res);
        
      })
    });


  }
}
