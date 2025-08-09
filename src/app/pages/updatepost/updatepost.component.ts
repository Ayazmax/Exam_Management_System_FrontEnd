import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-update-post',
    templateUrl: './updatepost.component.html',
    styleUrls: ['./updatepost.component.css']
})
export class UpdatePostComponent implements OnInit {

    postId: number = 0;
    content: string = '';
    creatorUsername: string = '';
    selectedImage: File | null = null;
    imageSrc: string | ArrayBuffer | null = '';

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.postId = +params['id'];
            this.fetchPostById(this.postId);
        });
    }

    fetchPostById(postId: number) {
        this.http.get<any>(`http://localhost:8080/api/posts/${postId}`)
            .subscribe(
                post => {
                    this.content = post.content;
                    this.creatorUsername = post.creatorUsername;
                    this.imageSrc = `http://localhost:8080/api/posts/images/${post.imagePath}`;
                },
                error => {
                    console.error('Error fetching post by ID:', error);
                }
            );
    }

    updatePost() {
        const formData: FormData = new FormData();
        if (this.selectedImage) {
            formData.append('file', this.selectedImage, this.selectedImage.name);
        }
        formData.append('content', this.content);
        formData.append('creatorUsername', this.creatorUsername);

        this.http.post<any>(`http://localhost:8080/api/posts/${this.postId}/update`, formData)
            .subscribe(
                updatedPost => {
                    console.log('Post updated:', updatedPost);
                    // Optionally, you can display a success message or redirect to another page
                },
                error => {
                    console.error('Error updating post:', error);
                    // Optionally, you can display an error message
                }
            );
    }

    onFileSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.selectedImage = file;
            const reader = new FileReader();
            reader.onload = () => {
                this.imageSrc = reader.result;
            };
            reader.readAsDataURL(file);
        }
    }
}
