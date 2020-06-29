import { Injectable } from '@angular/core';
import { Question } from '../model/question';
import { QUESTIONS } from '../data/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor() { }

  getQuestions(): Question[] {
    return QUESTIONS;
  }
}
