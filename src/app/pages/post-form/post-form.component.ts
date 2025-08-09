import { Component } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
postContent: string = '';

  constructor() {}

  addPost() {
    const postContent = (document.getElementById('postContent') as HTMLTextAreaElement).value;
    const postImageInput = document.getElementById('postImage') as HTMLInputElement | null;
    if (postImageInput && postImageInput.files && postImageInput.files.length > 0) {
      const postImage = postImageInput.files[0];
      console.log('Post Content:', postContent);
      console.log('Post Image:', postImage);
      // You can handle the content and image as needed
      // Clear the input fields after submission if required
      // (document.getElementById('postContent') as HTMLTextAreaElement).value = '';
      // postImageInput.value = '';
    } else {
      console.error('No image selected.');
    }
  }
}
