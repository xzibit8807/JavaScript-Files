import { Component } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Game } from '../game/game.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {
  newGame: Game = {
    gameName: '',
    gameImage: '',
    gameType: '',
    gameDescription: '',
    likedList: [],
    userId: '',
    comments: [],
    addedDate: new Date()
  };

  constructor(private catalogService: CatalogService,  private router: Router) {}

  onSubmit() {
    this.catalogService.addGame(this.newGame).subscribe(() => {
      alert('Game added successfully!');
      this.router.navigate(['/home']);
    },
    (error) => {
      console.error('Error adding game:', error);
      alert('Failed to add game. Check console for details.');
    });
  }
}
