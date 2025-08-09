import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-goals',
  templateUrl: './view-goals.component.html',
  styleUrls: ['./view-goals.component.css']
})
export class ViewGoalsComponent implements OnInit {

  isCollapsed: boolean = false;
  goals: any[] = [];
  newGoal: any = {};

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchGoals(); // Fetch goals when component initializes

    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const parsedUser = JSON.parse(currentUser);
      if (typeof parsedUser === 'object' && 'username' in parsedUser) {
        this.newGoal.username = parsedUser.username;
      }
    }
  }

  fetchGoals(): void {
    this.http.get<any[]>('http://localhost:8080/api/goals/all').subscribe(
      (goals) => {
        this.goals = goals;
      },
      (error) => {
        console.error('Error fetching goals:', error);
      }
    );
  }

  saveGoal(): void {
    // Add current date as createdDate
    this.newGoal.createdDate = new Date().toISOString();
    // Set status to "In progress"
    this.newGoal.status = "In progress";
    this.http.post<any>('http://localhost:8080/api/goals/add', this.newGoal).subscribe(
      (response) => {
        console.log('Goal saved successfully:', response);
        this.fetchGoals(); // Refresh goals list after saving
        // Clear the form fields
        this.newGoal = {};
      },
      (error) => {
        console.error('Error saving goal:', error);
      }
    );
  }

  markAsDone(goal: any): void {
    goal.status = 'Success';
    this.updateGoal(goal);
  }

  deleteGoal(goalId: number): void {
    this.http.delete(`http://localhost:8080/api/goals/delete/${goalId}`).subscribe(
      () => {
        console.log('Goal deleted successfully');
        this.fetchGoals(); // Refresh goals list after deleting
      },
      (error) => {
        console.error('Error deleting goal:', error);
      }
    );
  }

  updateGoal(goal: any): void {
    this.http.put(`http://localhost:8080/api/goals/update/${goal.id}`, goal).subscribe(
      (response) => {
        console.log('Goal updated successfully:', response);
        this.fetchGoals(); // Refresh goals list after updating
      },
      (error) => {
        console.error('Error updating goal:', error);
      }
    );
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  toggleSidePanel(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
