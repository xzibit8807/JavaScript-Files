// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class GameModule { }
export interface Game {
  gameName: string;
  gameImage: string;
  gameType: string;
  gameDescription: string;
  likedList: string[];
  userId: string;
  comments: string[];
  addedDate: Date;
}
