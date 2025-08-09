import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-profile-dialog',
  templateUrl: './business-profile-dialog.component.html',
  styleUrls: ['./business-profile-dialog.component.css']
})
export class BusinessProfileDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private dialogRef: MatDialogRef<BusinessProfileDialogComponent>
  ) {}

  navigate(route: string): void {
    // Pass the username along with the route
    this.router.navigate([route, { username: this.data.username }]);
    // Close the dialog
    this.dialogRef.close();
  }

}
