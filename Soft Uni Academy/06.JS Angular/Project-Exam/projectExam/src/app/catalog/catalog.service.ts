import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Game } from './game/game.module';
// import { Comment } from '../home/about/comment.module';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private apiUrl = 'http://localhost:3000/api/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    console.log( Observable<Game[]>);
    return this.http.get<Game[]>(this.apiUrl);
  }

  addGame(gameData: Game): Observable<Game> {
    const token = localStorage.getItem('authToken');

    if (!token) {
      console.error('No token found in localStorage');
      return throwError('No token found');
    } else {
      console.log('Token found:', token);
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    console.log('Sending headers:', headers);

    return this.http.post<Game>(this.apiUrl, gameData, { headers });
  }
}

// getAboutPageComments( comments: Comment): Observable<Comment>, {
//   return this.http.get<Comment>(`${this.apiUrl}/comments`, { params: { comment } })
// }

