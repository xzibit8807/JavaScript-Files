import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

}
function getComments(comments: string){
  return comments.split('\n').filter(comment => comment.trim().length > 0);
}