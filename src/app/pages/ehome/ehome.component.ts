import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { RateDialogComponent } from '../rate-dialog/rate-dialog.component';
import { RatingsDialogComponent } from '../ratings-dialog/ratings-dialog.component';
import { CommentsDialogComponent } from '../comments-dialog/comments-dialog.component';

@Component({
    selector: 'app-ehome',
    templateUrl: './ehome.component.html',
    styleUrls: ['./ehome.component.css'],
})
export class EhomeComponent {
  isCommentsOpen: any;
  isCollapsed: boolean = false;
  isLiked: any;
  currentPost: any; 
  postId: any;
  userProfile: any;
  comment: string = '';
  posts: any[] = [];

  constructor(private router: Router, private http: HttpClient, public dialog: MatDialog) {
    

  }

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
        this.http.get<any>('http://localhost:8080/api/posts/allPost').subscribe(
            (postsData) => {
                // Iterate over each post
                postsData.forEach((post: any) => {
                    // Fetch the profile photo URL for the post's creator
                    this.http.get<any>('http://localhost:8080/api/users/' + post.creatorUsername).subscribe(
                        (userData) => {
                            // Update the post with the creator's profile photo URL
                            post.creatorProfilePhoto = 'http://localhost:8080/api/users/images/' + userData.profilePhotoPath;
                            // Push the updated post to the posts array
                            this.posts.push(post);

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

viewPostDetails(post: any) {
  this.currentPost = post;
}
  
submitComment(postId: number, comment: string): void {
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    const commenterUsername = user.username;

    const formData: FormData = new FormData();
    formData.append('comment', comment);
    formData.append('commenterUsername', commenterUsername);

    this.http.post<any>('http://localhost:8080/api/comments/add/' + postId, formData).subscribe(
      (response) => {
        console.log('Comment added successfully:', response);
        // Optionally, update UI to show the new comment
        window.location.reload(); // Refresh the page
      },
      (error) => {
        console.error('Error adding comment:', error);
        // Handle error response
      }
    );
  } else {
    console.error('User data not found in local storage');
    // Handle the scenario when the user is not logged in
  }
}

  toggleComments(): void {
    this.isCommentsOpen = !this.isCommentsOpen;
  }

  openRatingDialog(postId: number): void {
    const dialogRef = this.dialog.open(RateDialogComponent, {
      width: '250px',
      data: { postId }
    });
  }

  navigate(route: string): void {
    this.router.navigate([route]);
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

toggleSidePanel(): void {
  this.isCollapsed = !this.isCollapsed;
}

openReviewsDialog(comments: any[]): void {
  const dialogRef = this.dialog.open(CommentsDialogComponent, {
    width: '400px',
    data: { comments }
  });
}
}
