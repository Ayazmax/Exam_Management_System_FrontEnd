import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserProfileDialogComponent } from '../user-profile-dialog/user-profile-dialog.component';

@Component({
  selector: 'app-applyip',
  templateUrl: './applyip.component.html',
  styleUrls: ['./applyip.component.css']
})
export class ApplyipComponent {

  users: any[] = [];
  isCollapsed: boolean = false;
  filteredUsers: any[] = [];
  selectedUserRole: string = 'All'; // Default selection

  constructor(private router: Router, private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit(): void {
    // Fetch user data from your API endpoint
    this.http.get<any>('http://localhost:8080/api/users/all').subscribe(
      (userData) => {
        // Filter users by role (Business Partner or Investor)
        this.users = userData.filter((user: { userRole: string; }) => 
          user.userRole === 'Business Partner' || user.userRole === 'Investor'
        );
        // Assign filtered users to filteredUsers
        this.filteredUsers = this.users.map(user => ({
          ...user,
          profilePhoto: 'http://localhost:8080/api/users/images/' + user.profilePhotoPath // Adjust the URL as per your API
        }));
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
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
    const dialogRef = this.dialog.open(UserProfileDialogComponent, {
      width: '400px', // Adjust the width as needed
      data: user // Pass the user object to the dialog
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
    });
  }

  toggleSidePanel(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  // Function to filter users based on selected role
  filterUsersByRole(): void {
    if (this.selectedUserRole === 'All') {
      // Show both Business Partners and Investors when "All" is selected
      this.filteredUsers = this.users.filter(user =>
        user.userRole === 'Business Partner' || user.userRole === 'Investor'
      ).map(user => ({
        ...user,
        profilePhoto: 'http://localhost:8080/api/users/images/' + user.profilePhotoPath
      }));
    } else {
      // Filter users based on the selected role
      this.filteredUsers = this.users
        .filter(user => user.userRole === this.selectedUserRole)
        .map(user => ({
          ...user,
          profilePhoto: 'http://localhost:8080/api/users/images/' + user.profilePhotoPath
        }));
    }
  }
}
