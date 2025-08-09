import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comments-dialog',
  templateUrl: './comments-dialog.component.html',
  styleUrls: ['./comments-dialog.component.css']
})
export class CommentsDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
