import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommentsDialogComponent } from '../comments-dialog/comments-dialog.component';
import { RatingsDialogComponent } from '../ratings-dialog/ratings-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-mpostsp',
    templateUrl: './mpostsp.component.html',
    styleUrls: ['./mpostsp.component.css'],

})
export class MpostspComponent {
  
  isLiked: any;
  isCollapsed: boolean = false;
  postId: any;
  userProfile: any;
  posts: any[] = [];

  constructor(private router: Router, private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      const username = user.username;
  
      this.http.get<any>('http://localhost:8080/api/users/' + username).subscribe(
        (userData) => {
          // Update the profile photo URL to load the image
          userData.profilePhoto = 'http://localhost:8080/api/users/images/' + userData.profilePhotoPath;
          this.userProfile = userData;
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
  
      // Fetch posts for the current user
      this.http.get<any>('http://localhost:8080/api/posts/user/' + username).subscribe(
        (postsData) => {
          // Iterate over each post
          this.posts = postsData.map((post: any) => {
            // Fetch the profile photo URL for the post's creator
            this.http.get<any>('http://localhost:8080/api/users/' + post.creatorUsername).subscribe(
              (userData) => {
                // Update the post with the creator's profile photo URL
                post.creatorProfilePhoto = 'http://localhost:8080/api/users/images/' + userData.profilePhotoPath;
  
                // Fetch comments for the current post
                this.http.get<any>('http://localhost:8080/api/comments/post/' + post.id).subscribe(
                  (commentsData) => {
                    // Update the post with comments
                    post.comments = commentsData;
                  },
                  (error) => {
                    console.error('Error fetching comments for post:', error);
                  }
                );
              },
              (error) => {
                console.error('Error fetching user data for post creator:', error);
              }
            );
  
            return post;
          });
        },
        (error) => {
          console.error('Error fetching user posts:', error);
        }
      );
    } else {
      console.error('User data not found in local storage');
      // Redirect to login page or handle the scenario as needed
    }
  }

  editPost(postId: number, image: string, content: string) {
    // Navigate to update post page with the post ID, image, and content as route parameters
    this.router.navigate(['/update-post', postId], { queryParams: { image, content } });
  }

  deletePost(postId: any) {
    // Send DELETE request to delete the post with the specified ID
    this.http.delete<any>('http://localhost:8080/api/posts/' + postId).subscribe(
      () => {
        // Remove the deleted post from the posts array
        this.posts = this.posts.filter(post => post.id !== postId);
      },
      (error) => {
        console.error('Error deleting post:', error);
        // Handle error appropriately, such as displaying an error message
      }
    );
  }

  toggleLike(postId: number) {
    throw new Error('Method not implemented.');
  }

  isCommentsOpen: any;
  toggleComments() {
    throw new Error('Method not implemented.');
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  toggleSidePanel(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  viewRatings(postId: number): void {
    this.http.get<any>('http://localhost:8080/api/ratings/post/' + postId).subscribe(
      (ratingsData) => {
        const ratings = ratingsData.map((rating: any) => {
          return {
            value: rating.ratingValue,
            rater: rating.raterUsername
          };
        });
        this.showRatingsDialog(ratings);
      },
      (error) => {
        console.error('Error fetching ratings for post:', error);
      }
    );
  }

  showRatingsDialog(ratings: any[]): void {
    const dialogRef = this.dialog.open(RatingsDialogComponent, {
      width: '250px',
      data: { ratings }
    });
  }

  openReviewsDialog(comments: any[]): void {
    const dialogRef = this.dialog.open(CommentsDialogComponent, {
      width: '400px',
      data: { comments }
    });
  }

}
