
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { tap } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent implements OnInit {
  constructor(private  userService: UserService, http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.userService.logout().unsubscribe()
    this.router.navigate(['/auth/login']);
    // this.logout();
  }

  // logout() {
  //   this.http.post('/logout', {}).pipe(
  //     tap(() => {
  //       this.user$$.next(undefined)
  //     })
  //   ).subscribe();
  // }
}
