import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userDetails: any;

  constructor(private router: Router, private authService: AuthService) {
  }
  ngOnInit() {
    const userProfile = localStorage.getItem('userProfile');
    if (userProfile) {
      this.userDetails = JSON.parse(userProfile);
    }
  }

  get isLoggedIn(): boolean {
    return this.authService.getIsLoggedIn();
  }

  logout(): void {
    localStorage.removeItem('userProfile');
    this.authService.setIsLoggedIn(false);
    alert('Logged out successfully');
    this.router.navigate(['/signin']);
  }
}
