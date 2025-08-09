import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sell-raw',
  templateUrl: './sell-raw.component.html',
  styleUrls: ['./sell-raw.component.css']
})
export class SellRawComponent {
  rawMaterial: any = {};
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    const formData = new FormData();
    formData.append('file', this.selectedFile as File);
    formData.append('sellerName', this.rawMaterial.sellerName);
    formData.append('materialName', this.rawMaterial.materialName);
    formData.append('materialDescription', this.rawMaterial.materialDescription);
    formData.append('price', this.rawMaterial.price.toString());
    formData.append('email', this.rawMaterial.email); // Include email in form data

    this.http.post<any>('http://localhost:8080/api/rawMaterials/add', formData).subscribe(
      (response) => {
        console.log('Raw material added successfully:', response);
        // Clear form fields after successful submission
        this.rawMaterial = {};
        this.selectedFile = null;
      },
      (error) => {
        console.error('Error adding raw material:', error);
      }
    );
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
}
