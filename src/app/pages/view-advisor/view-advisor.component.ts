import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-advisor',
  templateUrl: './view-advisor.component.html',
  styleUrls: ['./view-advisor.component.css']
})
export class ViewAdvisorComponent implements OnInit {
  advisors: any[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchAdvisors();
  }

  fetchAdvisors(): void {
    this.http.get<any[]>('http://localhost:8080/api/advisors/all').subscribe(
      (response) => {
        this.advisors = response;
      },
      (error) => {
        console.error('Error fetching advisors:', error);
      }
    );
  }

  deleteAdvisor(advisorId: number): void {
    if (confirm('Are you sure you want to delete this advisor?')) {
      this.http.delete(`http://localhost:8080/api/advisors/delete/${advisorId}`).subscribe(
        () => {
          this.fetchAdvisors(); // Refresh advisor list after deletion
          this.openSnackBar('Advisor deleted successfully');
        },
        (error) => {
          console.error('Error deleting advisor:', error);
          this.openSnackBar('Failed to delete advisor');
        }
      );
    }
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}
