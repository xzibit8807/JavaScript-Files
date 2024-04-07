import { Injectable, OnDestroy } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();
  private apiUrl = 'http://localhost:3000';

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

  login(email: string, password: string) {
    return this.http
      .post<UserForAuth>(this.apiUrl +'/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(email: string, password: string, confirmPassword: string): Observable<any> {
    const userData = { email, password, confirmPassword };
    return this.http.post<UserForAuth>(this.apiUrl, {userData})
     .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post('/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
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