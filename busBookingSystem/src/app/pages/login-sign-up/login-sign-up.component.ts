import { Component, ElementRef, ViewChild } from '@angular/core';
import { SearchServiceService } from '../../service/search-service.service';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-login-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-sign-up.component.html',
  styleUrl: './login-sign-up.component.css'
})
export class LoginSignUpComponent {
  newUserObj: any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "role": "User",
    "createdDate": new Date(),
    "password": "",
    "projectName": "",
    "refreshToken": "",
    "refreshTokenExpiryTime": new Date()
  }
  loggedInUserData: any;
  isLogin: boolean = true;
  @ViewChild('formModel') formModel!: ElementRef;
  constructor(private serviceObj: SearchServiceService, private authService: AuthServiceService, private route: Router) { }
  closeModel() {}
// To Show the login form
  Showloginpage() {
    this.isLogin = true;
  }
  // To show the Sign up page
  ShowRegisterpage() {
    this.isLogin = false;
  }
  // To Call the New User Register API
  OnRegisterNewUser() {
    this.serviceObj.newUserRegister(this.newUserObj).subscribe((res: any) => {
      alert("User registered sucessfully");
      localStorage.setItem('redbus', JSON.stringify(res.data));
      this.loggedInUserData = res.data;
      this.route.navigateByUrl('/search');
    }, error => {
      alert(JSON.stringify(error));
    })
  }
// To call the Login user API
  onLogin() {
    this.serviceObj.userLogin(this.newUserObj).subscribe((res: any) => {
      alert("User Logged In sucessfully");
      localStorage.setItem('redbus', JSON.stringify(res.data));
      this.loggedInUserData = res.data;
      this.authService.login(res.data);
      this.route.navigateByUrl('/search');
    }, error => {
      alert(JSON.stringify(error));
    })
  }
}
