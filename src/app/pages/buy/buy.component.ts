import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  quantity: number = 0;

  constructor(private router: Router) { }

  onSubmit(): void {
    // Handle form submission
    console.log('Buying raw material with quantity:', this.quantity);

    // You can add logic to handle the purchase, such as sending a request to your backend API

    // After handling the purchase, navigate to another page if needed
    this.router.navigate(['/success']); // Example: navigate to a success page
  }
}
