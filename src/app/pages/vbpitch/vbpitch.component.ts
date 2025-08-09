import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vbpitch',
  templateUrl: './vbpitch.component.html',
  styleUrls: ['./vbpitch.component.css']
})
export class VbpitchComponent implements OnInit {

  businessPitches: any[] = [];
  username: string = ''; 

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || ''; // Handle null case
    this.fetchBusinessPitchesByUsername(this.username);
  }

  fetchBusinessPitchesByUsername(username: string): void {
    this.http.get<any[]>(`http://localhost:8080/api/business-pitches/by-user/${username}`).subscribe(
      (businessPitches) => {
        this.businessPitches = businessPitches;
      },
      (error) => {
        console.error('Error fetching business pitches by username:', error);
      }
    );
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
