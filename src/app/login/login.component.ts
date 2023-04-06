import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {} //Inject auth service

  ngOnInit(): void {
    
  }

  login() {
    if(this.username.trim().length === 0) { //if else statement for username and password
      this.errorMsg = 'Username is required';
    } else if(this.password.trim().length === 0) {
      this.errorMsg = 'Password is required';
    } else {
      this.errorMsg = '';
      let res = this.auth.login(this.username, this.password); //get if else statement for the authservice
      if(res === 200) {
        this.router.navigate(['home'])
      } else {
        this.errorMsg = 'Invalid Credentials'
      }
    }
  }
}
