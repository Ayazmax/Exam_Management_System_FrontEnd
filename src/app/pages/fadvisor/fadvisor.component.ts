import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fadvisor',
  templateUrl: './fadvisor.component.html',
  styleUrls: ['./fadvisor.component.css'],
})
export class FadvisorComponent implements OnInit {

  isCollapsed: boolean = false;
  advisors: any[] = [];
  filteredAdvisors: any[] = [];
  selectedAdvisorType: string = 'All';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch user data from your API endpoint
    this.http.get<any>('http://localhost:8080/api/advisors/all').subscribe(
      (advisorData) => {
        // Filter users by role (Business Partner or Investor)
        this.advisors = advisorData.filter((advisor: { advisorType: string; }) => 
        advisor.advisorType === 'HR' || advisor.advisorType === 'Marketing' || advisor.advisorType === 'Finance'
        );
        // Assign filtered users to filteredUsers
        this.filteredAdvisors = this.advisors.map(advisor => ({
          ...advisor,
          imagePath: 'http://localhost:8080/api/advisors/images/' + advisor.imagePath 
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

  toggleSidePanel(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  apply(advisorEmail: string): void {
    const gmailURL = `mailto:${advisorEmail}`;
    window.location.href = gmailURL;
  }


    filterAdvisorsByType(): void {
      if (this.selectedAdvisorType === 'All') {
        this.filteredAdvisors = this.advisors.filter(advisor =>
          advisor.advisorType === 'HR' || advisor.advisorType === 'Marketing' || advisor.advisorType === 'Finance'
        ).map(advisor => ({
          ...advisor,
          imagePath: 'http://localhost:8080/api/advisors/images/' + advisor.imagePath
        }));
      } else {
        this.filteredAdvisors = this.advisors
          .filter(advisor => advisor.advisorType === this.selectedAdvisorType)
          .map(advisor => ({
            ...advisor,
            imagePath: 'http://localhost:8080/api/advisors/images/' + advisor.imagePath
          }));
      }
    }

}
