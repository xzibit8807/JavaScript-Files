import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { CommentsService } from './about/comments.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  constructor(private userService: UserService, commentService: CommentsService){}
}
