import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {

  postData: any = {};
  selectedFile: File | null = null;
  currentUser: string | null = null; // Property to store the current user's username

  constructor(private http: HttpClient) {
    const currentUserString = localStorage.getItem('currentUser');
    if (currentUserString) {
      const currentUserObject = JSON.parse(currentUserString);
      this.currentUser = currentUserObject.username;
    }
  }

  submitForm() {
    if (!this.postData.content || !this.selectedFile) {
      // Handle validation for required fields
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill out all required fields'
      });
      return;
    }

    const formData: FormData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('content', this.postData.content);
    formData.append('creatorUsername', this.currentUser || '');

    this.http.post<any>('http://localhost:8080/api/posts/add', formData).subscribe(
      (response) => {
        console.log('Post created successfully:', response);
        // Handle success response
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Post created successfully'
        });
      },
      (error) => {
        console.error('Error creating post:', error);
        // Handle error response
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while creating the post'
        });
      }
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }
}
