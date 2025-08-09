import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userData: any = {};
  selectedFile: File | null = null;
  formValid: boolean = false;

  constructor(private http: HttpClient) { }

  submitForm() {
    if (!this.userData.username || !this.userData.password || !this.userData.email || !this.selectedFile || !this.userData.userRole || !this.formValid) {
      // Handle validation for required fields
      return;
    }

    const formData: FormData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('username', this.userData.username);
    formData.append('password', this.userData.password);
    formData.append('email', this.userData.email);
    formData.append('firstName', this.userData.firstName);
    formData.append('lastName', this.userData.lastName);
    formData.append('phone', this.userData.phone);
    formData.append('userRole', this.userData.userRole);
    formData.append('businessName', this.userData.businessName);
    formData.append('businessType', this.userData.businessType);

    this.http.post<any>('http://localhost:8080/api/users/register', formData).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        this.showSuccessAlert();
        this.resetForm();
      },
      (error) => {
        console.error('Error registering user:', error);
        this.showErrorAlert();
      }
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.checkFormValidity();
    }
  }

  resetForm() {
    this.userData = {};
    this.selectedFile = null;
    this.formValid = false;
  }

  showSuccessAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Registration Successful',
      text: 'User registered successfully!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });
  }

  showErrorAlert(message: string = 'An error occurred. Please try again later.') {
    Swal.fire({
      icon: 'error',
      title: 'Registration Failed',
      text: message,
      confirmButtonColor: '#d33',
      confirmButtonText: 'OK'
    });
  }

  checkFormValidity() {
    // Check if all required fields are filled
    this.formValid = !!this.userData.username && !!this.userData.password && !!this.userData.email && !!this.selectedFile && !!this.userData.userRole;
  }
}
