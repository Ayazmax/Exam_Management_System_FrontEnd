import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-business-pitch',
  templateUrl: './view-business-pitch.component.html',
  styleUrls: ['./view-business-pitch.component.css']
})
export class ViewBusinessPitchComponent implements OnInit {

  businessPitches: any[] = [];
  isCollapsed: boolean = false;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      const username = user.username;
      this.fetchBusinessPitchesByUsername(username);
    } else {
      console.error('User data not found in local storage');
      // Handle the scenario where user data is not found in local storage
    }
  }

  fetchBusinessPitchesByUsername(username: string): void {
    this.http.get<any[]>(`http://localhost:8080/api/business-pitches/by-user/${username}`).subscribe(
      (businessPitches) => {
        this.businessPitches = businessPitches;
      },
      (error) => {
        console.error('Error fetching business pitches by username:', error);
      }
    );
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  deleteBusinessPitch(pitchId: number): void {
    if (confirm('Are you sure you want to delete this business pitch?')) {
      // Call the backend API to delete the business pitch
      this.http.delete(`http://localhost:8080/api/business-pitches/delete/${pitchId}`).subscribe(
        () => {
          // Remove the deleted pitch from the list displayed on the UI
          this.businessPitches = this.businessPitches.filter(pitch => pitch.id !== pitchId);
          console.log('Business pitch deleted successfully');
        },
        (error) => {
          console.error('Error deleting business pitch:', error);
          // Handle error scenarios
        }
      );
    }
  }

  toggleSidePanel(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
