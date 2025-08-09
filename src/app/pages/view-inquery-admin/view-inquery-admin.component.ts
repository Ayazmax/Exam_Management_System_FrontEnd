import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-inquery-admin',
  templateUrl: './view-inquery-admin.component.html',
  styleUrls: ['./view-inquery-admin.component.css']
})
export class ViewInqueryAdminComponent implements OnInit {

  inquiries: any[] = [];
  selectedSubject: string = 'All';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchInquiries();
  }

  fetchInquiries(): void {
    this.http.get<any[]>('http://localhost:8080/api/inquiries/all').subscribe(
      (inquiries) => {
        this.inquiries = inquiries;
      },
      (error) => {
        console.error('Error fetching inquiries:', error);
      }
    );
  }

  filterInquiriesBySubject(): void {
    let endpoint = 'http://localhost:8080/api/inquiries/all';
    if (this.selectedSubject !== 'All') {
      endpoint = `http://localhost:8080/api/inquiries/subject/${this.selectedSubject}`;
    }

    this.http.get<any[]>(endpoint).subscribe(
      (inquiries) => {
        this.inquiries = inquiries;
      },
      (error) => {
        console.error('Error fetching inquiries:', error);
      }
    );
  }

  apply(inquery: any): void {
    // Assuming the user object has an email property
    const inqueryEmail = inquery.email; // Change this to the actual property name for the email
  
    // Construct the Gmail URL with the recipient email
    const gmailURL = `mailto:${inqueryEmail}`;
  
    // Navigate to the Gmail URL
    window.location.href = gmailURL;
  }
}
