import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rate-dialog',
  templateUrl: './rate-dialog.component.html',
  styleUrls: ['./rate-dialog.component.css']
})
export class RateDialogComponent implements OnInit {

  rating: number = 0;
  ratingValue!: number;
  raterUsername: string | null = null; 

  constructor(
    public dialogRef: MatDialogRef<RateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Retrieve the username from localStorage
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.raterUsername = user.username;
    } else {
      // Handle the case when the user is not logged in or user data is missing from localStorage
      // For example, redirect to login page or display an error message
      this.raterUsername = ''; // Set a default value if raterUsername is null
    }
  }

  onRate(): void {
    // Ensure raterUsername is not null before proceeding
    if (this.raterUsername !== null) {
      // Create a FormData object to send data in the request body
      const formData = new FormData();
      formData.append('ratingValue', this.ratingValue.toString()); // Use ratingValue instead of rating
      formData.append('raterUsername', this.raterUsername); // Append the raterUsername to the FormData
    
      // Send an HTTP request to add the rating for the post
      this.http.post<any>('http://localhost:8080/api/ratings/add/' + this.data.postId, formData).subscribe(
        (response) => {
          console.log('Rating added successfully:', response);
          this.ratingValue = this.ratingValue; // Assign the rating value
          this.dialogRef.close({ ratingValue: this.ratingValue });
        },
        (error) => {
          console.error('Error adding rating:', error);
          // Handle error response
          // Optionally, you can close the dialog if needed
          this.dialogRef.close();
        }
      );
    } else {
      console.error('Rater username is null');
      // Handle the scenario when rater username is null
      // For example, display an error message to the user
    }
  }
  
  

}
