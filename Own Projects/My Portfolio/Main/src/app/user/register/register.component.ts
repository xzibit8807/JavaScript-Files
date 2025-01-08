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
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
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
    // debugger;
    console.log(this.registerForm.value);
    
    if (this.registerForm.invalid) {
      return;
    }
  
    const { email, name, passGroup: { password, confirmPassword } = {} } = this.registerForm.value /*as { email: string, passGroup: { password: string, confirmPassword: string } };
  */
    if (email && name && password && confirmPassword) {
      console.log(email, name, "has a password");
      
      this.userService.register(email!, name!, password!, confirmPassword!).subscribe(()=>{
        this.router.navigate(['/home']);
      })
      // this.userService.register(email!, password!, confirmPassword!).subscribe({
      //   next: () => {
      //     this.router.navigate(['/home']);
      //   },
      //   error: (error) => {
      //     console.error('Registration failed:', error);
      //   }
      // });
    } else {
      console.error('Email, password, or confirmPassword is missing.');
    }
  }
  
  get emailInvalid() {
    const emailControl = this.registerForm.get('email');
    return emailControl?.touched && emailControl?.invalid;
  }

  get emailRequired() {
    return this.registerForm.get('email')?.errors?.['required'];
  }

  get emailInvalidFormat() {
    return this.registerForm.get('email')?.errors?.['email'];
  }

  get passwordMismatch() {
    return this.registerForm.hasError('matchPassword', 'passGroup');
  }
}
