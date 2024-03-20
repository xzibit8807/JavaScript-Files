import { Component, Input } from '@angular/core';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent {
  title = 'my-playground';
  users: User[] = [
    { name: `Jim Belushi`, age: 35 },
    { name: `Adam Sandler`, age: 45 },
    { name: `Ted`, age: 33 },
    { name: `Barny`, age: 32 },
    { name: `Bella`, age: 31 },
  ]}

  