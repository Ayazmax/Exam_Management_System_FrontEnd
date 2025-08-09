import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-business-pitch',
  templateUrl: './add-business-pitch.component.html',
  styleUrls: ['./add-business-pitch.component.css']
})
export class AddBusinessPitchComponent implements OnInit {

  isCollapsed: boolean = false;

  // Model for the form data
  formData: any = {
    username: '',
    pitchTitle: '',
    pitchDescription: '',
    problemStatement: '',
    solution: '',
    targetMarket: '',
    marketOpportunity: '',
    businessModel: '',
    marketingAndSalesStrategy: '',
    financialProjections: '',
    fundingRequirements: '',
    milestonesAndTimeline: ''
  };

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.initUsernameFromLocalStorage();
  }

  initUsernameFromLocalStorage(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const parsedUser = JSON.parse(currentUser);
      if (typeof parsedUser === 'object' && 'username' in parsedUser) {
        this.formData.username = parsedUser.username;
      }
    }
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  submitForm(): void {
    // Make a POST request to the backend API to create a business pitch
    this.http.post<any>('http://localhost:8080/api/business-pitches/add', this.formData).subscribe(
      response => {
        // Handle success
        console.log('Business pitch created successfully:', response);
        Swal.fire('Success', 'Business pitch created successfully', 'success');
        // Redirect to a success page or display a success message
      },
      error => {
        // Handle error
        console.error('Error creating business pitch:', error);
        Swal.fire('Error', 'Failed to create business pitch', 'error');
        // Display an error message to the user
      }
    );
  }

  toggleSidePanel(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
