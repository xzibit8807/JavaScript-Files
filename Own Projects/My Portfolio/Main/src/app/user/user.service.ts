import { Injectable, OnDestroy } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, Subscription, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();
  private apiUrl = 'http://localhost:3000/api';

  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  userSubscription: Subscription;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }


  // login(email: string, password: string): Observable<any> {
  //   return this.http.post<UserForAuth>(`${this.apiUrl}/login`, { email, password }).pipe(
  //     catchError(this.handleError)
  //   );
  // }
  // private handleError(error: HttpErrorResponse) {
  //   let errorMessage = 'Unknown error!';
  //   if (error.error instanceof ErrorEvent) {
  //     // Client-side or network error
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // Backend error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   return throwError(() => new Error(errorMessage));
  // }

  // login(email: string, password: string) {
  //   return this.http
  //     .post<UserForAuth>('/login', { email, password })
  //     .pipe(tap((user) => this.user$$.next(user)));
  // }


  login(email: string, password: string) {
    return this.http.post<UserForAuth>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((user) =>
        
          
          {this.user$$.next(user), console.log('User logged in:', user)}),
        
        catchError((error) => {
          console.error('Login failed:', error);
          return throwError(error);
        })
      ).pipe(tap((response: any) => {
        if (response.token) {
          localStorage.setItem('authToken', response.token); // Store the token in localStorage
          console.log('Token stored in localStorage:', response.token);
        } else {
          console.error('No token received from backend');
        }
      }),
      catchError((error) => {
        console.error('Login error:', error);
        return throwError(error);
      }));
  }
  
  register(email: string, name: string, password: string, confirmPassword: string): Observable<any> {
   
    return this.http.post<UserForAuth>(`${this.apiUrl}/register`, {email, name, password, confirmPassword})
     .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {},  { withCredentials: true })
      .pipe(tap(() => {
        this.user$$.next(undefined);
        console.log('User logged out');
        this.clearCookies();
      }))
      .subscribe();
  }
  
  clearCookies() {
    document.cookie.split(";").forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    });
  }
  
  getProfile() {
    return this.http
      .get<UserForAuth>('/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  updateProfile( email: string) {
    return this.http
      .put<UserForAuth>('/users/profile', {
        email,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}