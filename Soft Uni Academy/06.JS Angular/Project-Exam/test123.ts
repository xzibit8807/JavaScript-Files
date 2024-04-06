import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchPassword } from 'src/app/shared/validators/match-password';
import { RegisterService } from '../../api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    passGroup: this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: matchPassword('password', 'confirmPassword') })
  });

  constructor(private fb: FormBuilder,
    private registerService: RegisterService
    ) { }

  registerSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const { email, password } = this.registerForm.value as { email: string, password: string };
    // Cast registerForm.value to { email: string, password: string }

    this.registerService.register(email, password).subscribe(
      () => {
        // Registration successful, you can reset the form here
        this.registerForm.reset();
        console.log('Registration successful');
      },
      error => {
        // Handle registration errors here
        console.error('Registration failed:', error);
      }
    );
  }
}
