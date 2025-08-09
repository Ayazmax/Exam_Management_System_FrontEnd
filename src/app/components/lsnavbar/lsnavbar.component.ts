import { Component } from '@angular/core';

@Component({
  selector: 'app-lsnavbar',
  templateUrl: './lsnavbar.component.html',
  styleUrls: ['./lsnavbar.component.css']
})
export class LsnavbarComponent {
  activeLink: string = '';

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
}
