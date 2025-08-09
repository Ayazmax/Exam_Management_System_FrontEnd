import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  formSubmit() {
    if (!this.loginData.username || !this.loginData.password) {
      // Handle validation for required fields
      return;
    }

    this.authService.login(this.loginData).subscribe(
      (response: any) => {
        console.log('Login successful:', response);
        // Save user data to local storage
        const userData = {
          username: response.username,
          userRole: response.userRole // Add user role to the user data
        };
        localStorage.setItem('currentUser', JSON.stringify(userData));
        // Redirect based on user role
        this.redirectBasedOnRole(response.userRole);
      },
      (error) => {
        console.error('Login failed:', error);
        // Show error alert
        this.showErrorAlert();
      }
    );
  }

  redirectBasedOnRole(userRole: string) {
    switch (userRole) {
      case 'Investor':
        this.router.navigate(['/ihome']);
        break;
      case 'Business Partner':
        this.router.navigate(['/phome']);
        break;
      case 'Admin':
        this.router.navigate(['/adminpanel']);
        break;
      case 'Entrepreneur':
      case 'Startup Owner':
        this.router.navigate(['/ehome']);
        break;
      default:
        // Redirect to a default route in case of an unknown role
        this.router.navigate(['/default']);
        break;
    }
  }

  showErrorAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: 'Invalid username or password. Please try again.',
      confirmButtonColor: '#d33',
      confirmButtonText: 'OK'
    });
  }
}
