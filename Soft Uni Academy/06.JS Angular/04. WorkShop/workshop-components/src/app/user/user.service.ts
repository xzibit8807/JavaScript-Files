import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);

    } catch (error) {
      this.user = undefined;
    }
  }

  register(user: UserForAuth) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.user = user;
  }


  login(user: UserForAuth) {
    this.user = {
      firstName: user.firstName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password,
    }
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }


  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
