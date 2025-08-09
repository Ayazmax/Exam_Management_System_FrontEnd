import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ratings-dialog',
  templateUrl: './ratings-dialog.component.html',
  styleUrls: ['./ratings-dialog.component.css']
})
export class RatingsDialogComponent {
  ratings: any[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.ratings = data.ratings;
  }
}