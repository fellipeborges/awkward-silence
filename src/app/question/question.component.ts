import { Component, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  questions: Question[];
  current: Question;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.getQuestions();
  }

  // Retrieves the questions from Questions Service and shows the next random question.
  getQuestions(): void {
    this.questionService.getQuestions()
      .subscribe(q => {
        this.questions = [...q];
        this.showNextRandomQuestion();
      });
  }

  // Selects a random question from the array of questions and set it to be shown in the view to the user.
  // After selecting a question it's removed from the array.
  // If the questions array is empty nothing is done.
  showNextRandomQuestion(): void {
    // Cleans the current question
    this.current = undefined;

    // Checks if the array still contains questions
    if (!this.questions){
      return;
    }

    // Generates a random number between array's first and last position
    const min = 0;
    const max: number = this.questions.length - 1;
    const index: number = Math.floor(Math.random() * (max - min + 1) + min);

    // Sets the current questions
    this.current = this.questions[index];

    // Removes the question from the array
    this.questions.splice(index, 1);
  }

  // Checks if there are more questions to be shown
  noFurtherQuestions(): boolean {
    return this.questions.length === 0 && !this.current;
  }

  // Rebuilds the list of questions
  restartQuestions(): void {
    this.getQuestions();
  }
}
