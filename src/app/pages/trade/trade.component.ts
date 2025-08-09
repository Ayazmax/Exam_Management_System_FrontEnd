import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css'],

})
export class TradeComponent implements OnInit {

  username: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Retrieve username from local storage
    this.username = localStorage.getItem('username') || '';
  }

  navigateToSellRaw(): void {
    this.router.navigate(['/sellr']);
  }

  navigateToTradeRaw() {
    this.router.navigate(['/trader']);
  }

}
