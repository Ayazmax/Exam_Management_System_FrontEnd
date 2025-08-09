import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vp-profile',
  templateUrl: './vp-profile.component.html',
  styleUrls: ['./vp-profile.component.css']
})
export class VpProfileComponent implements OnInit {

  userProfile: any;
  isCollapsed: boolean = false;

  constructor(private router: Router, private http: HttpClient) {} // Inject HttpClient

  ngOnInit(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      const username = user.username;
      this.http.get<any>('http://localhost:8080/api/users/' + username).subscribe(
        (userData) => {
          // Update the profile photo URL to load the image
          userData.profilePhoto = 'http://localhost:8080/api/users/images/' + userData.profilePhotoPath;
          this.userProfile = userData;
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
    } else {
      console.error('User data not found in local storage');
      // Redirect to login page or handle the scenario as needed
    }
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  toggleSidePanel(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
