import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mini-games',
  templateUrl: './mini-games.component.html',
  styleUrls: ['./mini-games.component.css']
})
export class MiniGamesComponent {
  contactForm: any = {};


  onSubmit() {

    this.router.navigate(['tictac'])

  }
  constructor(private router: Router) { }
}
