import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})

export class MathComponent {
  num1: number = 0;
  num2: number = 0;
  operator: string = '+';
  answer: number = 0;
  isSubmitDisabled: boolean = false;
  userAnswer: number | null = null;
  isCorrect: boolean | null = null;
  feedbackMessage: string = '';
  score: number = 0;
  questionCount: number = 0;

  constructor() {
    this.generateQuestion();
  }

  // Generate a new question
  generateQuestion(): void {
    const operators = ['+', '-', '*'];
    this.num1 = Math.floor(Math.random() * 100) + 1;
    this.num2 = Math.floor(Math.random() * 10) + 1;
    this.operator = operators[Math.floor(Math.random() * operators.length)];
    if (this.operator === '*') {
      // Regenerate num1 and num2 until both are less than 10
      while (this.num1 >= 10 || this.num2 >= 10) {
        this.num1 = Math.floor(Math.random() * 10) + 1;
        this.num2 = Math.floor(Math.random() * 10) + 1;
      }
    }
    
    this.answer = this.calculateAnswer();
  }

  // Calculate the answer based on the operator
  calculateAnswer(): number {
    switch (this.operator) {
      case '+':
        return this.num1 + this.num2;
      case '-':
        return this.num1 - this.num2;
      case '*':
        return this.num1 * this.num2;
      default:
        return 0;
    }
  }

  // Check if the user's answer is correct
  
  checkAnswer(): void {
// debugger;
    if (this.userAnswer == this.answer) {
      this.isCorrect = true;
      this.feedbackMessage = 'Correct!';
      this.score += 1;
    } else {
      this.isCorrect = false;
      this.feedbackMessage = `Wrong! The correct answer was ${this.answer}.`;
    }
    this.isSubmitDisabled = true;
    this.questionCount += 1;
  }

  
  // Proceed to the next question
  nextQuestion(): void {
    this.userAnswer = null;
    this.isCorrect = null;
    this.feedbackMessage = '';
    this.isSubmitDisabled = false;
    this.generateQuestion();
  }
}
