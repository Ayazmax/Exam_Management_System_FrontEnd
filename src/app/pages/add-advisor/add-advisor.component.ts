import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-advisor',
  templateUrl: './add-advisor.component.html',
  styleUrls: ['./add-advisor.component.css']
})
export class AddAdvisorComponent {
  advisor: any = {}; // Define advisor object to store form data
  selectedImage: File | null = null; // Define selected image file
  formValid: boolean = false;

  constructor(private http: HttpClient) {}

  submitForm(): void {
    if (
      !this.advisor.name ||
      !this.advisor.email ||
      !this.advisor.contactNumber ||
      !this.advisor.advisorType ||
      !this.advisor.experience ||
      !this.advisor.qualifications ||
      !this.selectedImage ||
      !this.formValid
    ) {
      console.error('Please fill in all fields and select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedImage);
    formData.append('name', this.advisor.name);
    formData.append('email', this.advisor.email);
    formData.append('contactNumber', this.advisor.contactNumber);
    formData.append('advisorType', this.advisor.advisorType);
    formData.append('experience', this.advisor.experience);
    formData.append('qualifications', this.advisor.qualifications);

    this.http.post<any>('http://localhost:8080/api/advisors/add', formData).subscribe(
      (response) => {
        console.log('Advisor added successfully:', response);
        this.showSuccessAlert();
        this.resetForm();
      },
      (error) => {
        console.error('Error adding advisor:', error);
        this.showErrorAlert();
      }
    );
  }

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
    this.checkFormValidity();
  }

  resetForm(): void {
    this.advisor = {};
    this.selectedImage = null;
    this.formValid = false;
  }

  showSuccessAlert(): void {
    Swal.fire({
      icon: 'success',
      title: 'Advisor Added Successfully',
      text: 'Advisor added successfully!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });
  }

  showErrorAlert(message: string = 'An error occurred. Please try again later.'): void {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
      confirmButtonColor: '#d33',
      confirmButtonText: 'OK'
    });
  }

  checkFormValidity(): void {
    // Check if all required fields are filled
    this.formValid =
      !!this.advisor.name &&
      !!this.advisor.email &&
      !!this.advisor.contactNumber &&
      !!this.advisor.advisorType &&
      !!this.advisor.experience &&
      !!this.advisor.qualifications &&
      !!this.selectedImage;
  }
}
