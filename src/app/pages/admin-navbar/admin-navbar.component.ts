import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  logout() {
    // Clear navigation history and navigate to the login page
    const navigationExtras: NavigationExtras = {
      replaceUrl: true // Replace the current URL in the history
    };
    this.router.navigate(['/login'], navigationExtras);
  }

}
