import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { matchPassword } from 'src/app/shared/validators/match-password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, ]],
    password: ['', [Validators.required]],
    passGroup: this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: matchPassword('password', 'confirmPassword') })
  });
  get passGroup() {
    return this.registerForm.get('passGroup');
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  registerSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const {
      email,
      passGroup: { password, confirmPassword } = {},
    } = this.registerForm.value;

    this.userService
      .register( email!, password!, confirmPassword!)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}