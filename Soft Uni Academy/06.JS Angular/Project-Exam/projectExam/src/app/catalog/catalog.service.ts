import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Game } from './game/game.module';
import { catchError } from 'rxjs/operators';
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
    // debugger
    const token = localStorage.getItem('authToken');

    if (!token) {
      console.error('No token found in localStorage');
      return throwError('No token found');
    } else {
      console.log('Token found:', token);
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    console.log('Sending headers:', headers);

    // return this.http.post<Game>(this.apiUrl, gameData, { headers });
    return this.http.post<Game>(this.apiUrl, gameData, /*{ headers }*/).pipe(
      catchError((error) => {
        console.error('Error in HTTP request:', error);
        return throwError(() => new Error(error.message));
      })
    );
  }
}
