import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from '../model/question';
import { QUESTIONS } from '../data/questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor() {}

  getQuestions(): Observable<Question[]> {
    return of(QUESTIONS);
  }
}
