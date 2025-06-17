import { Component} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  loggedInUserData: any
  constructor(private route: Router,private authService: AuthServiceService) {
    this.authService.user$.subscribe(user => {
      this.loggedInUserData = user;
    });
  }
  // To go to the login page
  goToLogin() {
    this.route.navigateByUrl("/login")
  }
  // To logout the current user and clear the local storage 
  onLogout() {
    this.authService.logout();
    this.route.navigateByUrl("/login")
  }
}

