import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: any = {};

  // onSubmit() {

  //   console.log(this.contactForm);
  //   this.router.navigate(['tictac'])

  // }
  constructor(private router: Router) { }
}
