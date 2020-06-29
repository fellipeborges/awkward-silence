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

  getQuestions(): void {
    this.questionService.getQuestions()
      .subscribe(q => this.questions = q);
  }

  onNewQuestion(): void {
    this.current = this.questions[2];
  }
}
