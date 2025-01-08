import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent {
  boardSize = 400; // Size of the game board in pixels
  cellSize = 20; // Size of each cell in pixels
  snake = [{ x: 200, y: 200 }]; // Snake starts in the center
  food = { x: 0, y: 0 }; // Initial food position
  direction = { x: 0, y: 0 }; // Snake's movement direction
  score = 0; // Player's score
  gameInterval: any; // Holds the game loop interval

  constructor() {
    this.placeFood();
  }

  startGame(): void {
    this.snake = [{ x: 200, y: 200 }];
    this.direction = { x: this.cellSize, y: 0 }; // Start moving to the right
    this.score = 0;
    clearInterval(this.gameInterval);
    this.placeFood();
    this.gameInterval = setInterval(() => this.gameLoop(), 200);
  }
  

  placeFood(): void {
    const maxCells = this.boardSize / this.cellSize;
    this.food.x = Math.floor(Math.random() * maxCells) * this.cellSize;
    this.food.y = Math.floor(Math.random() * maxCells) * this.cellSize;
  } 
  moved: boolean = false;
  handleKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        if (this.direction.y === 0) this.direction = { x: 0, y: -this.cellSize };
        break;
      case 'ArrowDown':
        if (this.direction.y === 0) this.direction = { x: 0, y: this.cellSize };
        break;
      case 'ArrowLeft':
        if (this.direction.x === 0) this.direction = { x: -this.cellSize, y: 0 };
        break;
      case 'ArrowRight':
        if (this.direction.x === 0) this.direction = { x: this.cellSize, y: 0 };
        break;
    }
  }

  gameLoop(): void {
    if (this.direction.x === 0 && this.direction.y === 0) {
      return; // If the snake isn't moving, skip the loop
    }
  
    const head = { 
      x: this.snake[0].x + this.direction.x, 
      y: this.snake[0].y + this.direction.y 
    };
  
    // Check collision with walls
    if (
      head.x < 0 || 
      head.x >= this.boardSize || 
      head.y < 0 || 
      head.y >= this.boardSize
    ) {
      this.endGame();
      return;
    }
  
    // Check collision with itself
    if (this.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
      this.endGame();
      return;
    }
  
    // Add new head to the snake
    this.snake.unshift(head);
  
    // Check if the snake eats the food
    if (head.x === this.food.x && head.y === this.food.y) {
      this.score++;
      this.placeFood();
    } else {
      this.snake.pop(); // Remove the tail if no food is eaten
    }
  }
  

  endGame(): void {
    clearInterval(this.gameInterval);
    alert(`Game Over! Your score: ${this.score}`);
  }
}
