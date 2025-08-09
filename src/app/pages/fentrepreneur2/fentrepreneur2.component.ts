import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { BusinessProfileDialogComponent } from '../business-profile-dialog/business-profile-dialog.component';

@Component({
  selector: 'app-fentrepreneur2',
  templateUrl: './fentrepreneur2.component.html',
  styleUrls: ['./fentrepreneur2.component.css']
})
export class Fentrepreneur2Component implements OnInit {

  users: any[] = [];
  isCollapsed: boolean = false;

  constructor(private router: Router, private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    // Fetch user data from your API endpoint
    this.http.get<any>('http://localhost:8080/api/users/all').subscribe(
      (userData) => {
        // Assuming your API returns an array of user objects with properties like username, profilePhoto, and phone
        this.users = userData
          // Filter users by userRole === 'Entrepreneur'
          .filter((user: any) => user.userRole === 'Entrepreneur')
          .map((user: any) => {
            return {
              ...user,
              profilePhoto: 'http://localhost:8080/api/users/images/' + user.profilePhotoPath
            };
          });
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  viewBusinessProfile(user: any): void {
    const dialogRef = this.dialog.open(BusinessProfileDialogComponent, {
      width: '400px', // Adjust the width as needed
      data: user // Pass the user object to the dialog
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
    });
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  apply(user: any): void {
    // Assuming the user object has an email property
    const userEmail = user.email; // Change this to the actual property name for the email
  
    // Construct the Gmail URL with the recipient email
    const gmailURL = `mailto:${userEmail}`;
  
    // Navigate to the Gmail URL
    window.location.href = gmailURL;
  }
  

  viewProfile(user: any): void {
    // Implement your logic for viewing a user's profile
    console.log('Viewing profile of user:', user);
  }

  toggleSidePanel(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  
}
