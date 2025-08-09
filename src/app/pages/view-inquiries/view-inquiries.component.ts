import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-inquiries',
  templateUrl: './view-inquiries.component.html',
  styleUrls: ['./view-inquiries.component.css']
})
export class ViewInquiriesComponent implements OnInit {

  isCollapsed: boolean = false;
  inquiries: any[] = [];
  selectedSubject: string = 'All';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.filterInquiriesBySubject(); // Fetch inquiries initially
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

  toggleSidePanel(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
