import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginFormData: any = {};
  email: string = '';
  password: string = '';
  emailError: boolean = false;
  errorMessage: string = '';
  domains = EMAIL_DOMAINS;

  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm) {
    if (form.invalid) {
      Object.keys(form.controls).forEach((controlName) => {
        form.controls[controlName].markAsTouched();
      });
      return;
    }

    const { email, password } = form.value;

    this.userService.login(email, password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login failed', error);
        this.handleLoginError(error);
      }
    });
  }

  private handleLoginError(error: any) {
    if (error.status === 0) {
      this.errorMessage = 'Server is not reachable. Please try again later.';
    } else if (error.status === 404) {
      this.errorMessage = 'Login endpoint not found. Please check the backend URL.';
    } else if (error.status >= 400 && error.status < 500) {
      this.errorMessage = 'Invalid email or password.';
    } else {
      this.errorMessage = 'An unexpected error occurred. Please try again.';
    }
  }
}
