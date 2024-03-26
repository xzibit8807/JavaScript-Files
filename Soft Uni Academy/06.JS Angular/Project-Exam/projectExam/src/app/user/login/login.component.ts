import { Component, NgModule } from '@angular/core';
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

  
  domains = EMAIL_DOMAINS;
  // Render Static Content
  // ngOnInit():void {
  //   this.domains = EMAIL_DOMAINS;
  // }

  // Render the final content
  // ngAfterViewInit():void {}

  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm) {
 
    if (form.invalid) {  
      console.log(`Form validation failed`);    
      return;
    }
    

    const { email, password } = form.value;

    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}