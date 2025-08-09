import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-rinquiry',
    templateUrl: './rinquiry.component.html',
    styleUrls: ['./rinquiry.component.css'],
})
export class RinquiryComponent implements OnInit {

  isCollapsed: boolean = false;
  inquiryData: any = {};
  username: string = '';
  userRole: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    // Retrieve username and userRole from local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.username = currentUser.username;
    this.userRole = currentUser.userRole;
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  toggleSidePanel(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  submitInquiry(): void {
    // Include username and userRole in the inquiry data
    this.inquiryData.username = this.username;
    this.inquiryData.userRole = this.userRole;

    this.http.post<any>('http://localhost:8080/api/inquiries/add', this.inquiryData).subscribe(
      (response) => {
        console.log('Inquiry submitted successfully:', response);
        // Optionally, you can reset the form here
        this.inquiryData = {};
      },
      (error) => {
        console.error('Error submitting inquiry:', error);
        // Handle error response
      }
    );
  }
}
