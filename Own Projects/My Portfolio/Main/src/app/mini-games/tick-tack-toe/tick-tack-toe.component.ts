import { Component } from '@angular/core';

@Component({
  selector: 'app-tick-tack-toe',
  templateUrl: './tick-tack-toe.component.html',
  styleUrls: ['./tick-tack-toe.component.css']
})
export class TickTackToeComponent {
  board: string[] = Array(9).fill(null);
  currentPlayer: string = 'X';
  winner: string | null = null;

  makeMove(index: number): void {
    if (!this.board[index] && !this.winner) {
      this.board[index] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else if (this.isBoardFull()) {
        this.winner = null; // It's a draw
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): boolean {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    
    return winningCombinations.some(combination => {
      const [a, b, c] = combination;
      return this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c];
    });
  }

  isBoardFull(): boolean {
    return this.board.every(cell => cell !== null);
  }

  resetGame(): void {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
  }
}
