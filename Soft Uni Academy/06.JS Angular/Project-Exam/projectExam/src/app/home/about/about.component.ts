import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}



function getComments(comments: string){
  return comments.split('\n').filter(comment => comment.trim().length > 0);
}