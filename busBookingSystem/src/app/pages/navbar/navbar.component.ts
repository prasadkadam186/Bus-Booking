import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchServiceService } from '../../service/search-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  newUserObj:any={
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
  isLogin : boolean = true;
 @ViewChild('formModel') formModel!: ElementRef;
 constructor(private serviceObj:SearchServiceService){}
  openModel()
  {
    this.formModel.nativeElement.style.display = 'block';
  }
  closeModel()
  {
     this.formModel.nativeElement.style.display = 'none';
  }

  Showloginpage()
  {
    this.isLogin=true;
  }
  ShowRegisterpage()
  {
    this.isLogin=false;
  } 
  OnRegisterNewUser()
  {
    this.serviceObj.newUserRegister((res:any)=>{
      
    })
  }
  onLogin()
  {

  }
}

