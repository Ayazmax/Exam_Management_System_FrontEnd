import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trade-raw',
  templateUrl: './trade-raw.component.html',
  styleUrls: ['./trade-raw.component.css']
})
export class TradeRawComponent implements OnInit {
  rawMaterials: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchRawMaterials();
  }

  fetchRawMaterials(): void {
    this.http.get<any[]>('http://localhost:8080/api/rawMaterials/all').subscribe(
      (rawMaterials) => {
        this.rawMaterials = rawMaterials.map((rawMaterial: any) => {
          return {
            ...rawMaterial,
            materialImage: 'http://localhost:8080/api/rawMaterials/images/' + rawMaterial.materialImagePath
          };
        });
      },
      (error) => {
        console.error('Error fetching raw materials:', error);
      }
    );
  }

  buy(Email: string, materialName: string): void {
    const subject = encodeURIComponent(`Interested in ${materialName}`);
    // Open the default email client with the seller's email populated
    window.location.href = `mailto:${Email}?subject=${subject}`;
  }
}
