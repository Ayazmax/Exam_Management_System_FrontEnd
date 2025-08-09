import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-hnavbar',
  templateUrl: './hnavbar.component.html',
  styleUrls: ['./hnavbar.component.css']
})
export class HnavbarComponent {

  constructor(private router: Router) { } 

  logout() {
    // Clear navigation history and navigate to the login page
    const navigationExtras: NavigationExtras = {
      replaceUrl: true // Replace the current URL in the history
    };
    this.router.navigate(['/login'], navigationExtras);
  }

  viewProfile() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      // Check the role of the logged-in user
      switch (user.userRole) {
        case 'Entrepreneur':
        case 'Startup Owner':
          this.router.navigate(['/vbpro']);
          break;
        case 'Business Partner':
          this.router.navigate(['/vp-pro']);
          break;
        case 'Investor':
          this.router.navigate(['/vupro']);
          break;
        default:
          // Handle other roles if needed
          break;
      }
    }
  }

  trade(): void {
    this.router.navigate(['trade']);
  }
}
