import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

interface Comment {
  email: string;
  comment: string;
  createdAt?: Date;
}

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})

export class CommentSectionComponent implements OnInit {
  email = '';
  comment = '';
  comments: Comment[] = [];

  constructor(private CommentsService: CommentsService) {}

  ngOnInit(): void {
    this.getComments();
  }

  // Fetch all comments
  getComments() {
    this.CommentsService.getComments().subscribe((comments) => {
      this.comments = comments;
    });
  }

  // Submit a new comment
  onSubmit() {
    if (this.email && this.comment) {
      console.log(this.email + " comment already submitted: " + this.comment);
      this.CommentsService.addComment({ email: this.email, comment: this.comment })
        .subscribe(newComment => {
          this.comments.unshift(newComment); // Add new comment to the top
          this.email = '';
          this.comment = ''; // Reset form
        });
    }
  }
}