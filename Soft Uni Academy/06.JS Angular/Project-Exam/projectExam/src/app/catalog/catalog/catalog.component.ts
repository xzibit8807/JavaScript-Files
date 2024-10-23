import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Game } from '../game/game.module';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  games: Game[] = [];
  topLikedGames: Game[] = [];
  lastAddedGames: Game[] = [];
  filteredGames: Game[] = [];
  searchTerm: string = '';

  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.catalogService.getGames().subscribe((games: Game[]) => {
      this.games = games;
      this.filteredGames = games;
      this.topLikedGames = this.getTopLikedGames();
      this.lastAddedGames = this.getLastAddedGames();
    });
  }

  getTopLikedGames(): Game[] {
    return this.games
      .sort((a, b) => b.likedList.length - a.likedList.length)
      .slice(0, 3);
  }

  getLastAddedGames(): Game[] {
    return this.games
      .sort((a, b) => new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime())
      .slice(0, 3);
  }

  onSearch() {
    this.filteredGames = this.games.filter(game =>
      game.gameName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
