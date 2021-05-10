import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzz: Quiz [] =  [
    {
      question: 'You aren\'t busy now, ___ you?',
      answer: [
        {option: 'are', correct: true},
        {option: 'aren\'t', correct: false},
        {option: 'do', correct: false}
      ]
    },
    {
      question: 'Are you ___ at the moon?',
      answer:[
        {option: 'look', correct: false},
        {option: 'looking', correct: true},
        {option: 'looks', correct: false}
      ]
    },
    {
      question: '___ you play tennis yesterday?',
      answer:[
        {option: 'Does', correct: false},
        {option: 'Did', correct: true},
        {option: 'Doing', correct: false}
      ]
    },
    {
      question: 'I was ___ my car at that time.',
      answer:[
        {option: 'washes', correct: false},
        {option: 'washing', correct: true},
        {option: 'wash', correct: false}
      ]
    },
    {
      question: 'What do you like to drink?',
      answer:[
        {option: 'Two', correct: false},
        {option: 'With my friends', correct: false},
        {option: 'Coffee', correct: true}
      ]
    },
    {
      question: 'When was the last time you took a picture?',
      answer:[
        {option: 'About four days ago.', correct: true},
        {option: 'A picture of Jane.', correct: false},
        {option: 'With my camera.', correct: false}
      ]
    },
    {
      question: 'How often do you play tennis?',
      answer:[
        {option: 'On Tuesday.', correct: false},
        {option: 'Almost every day.', correct: true},
        {option: 'For two hours.', correct: false}
      ]
    },
    {
      question: 'How long did you study last night?',
      answer:[
        {option: 'In my room.', correct: false},
        {option: 'English.', correct: false},
        {option: 'For three hours.', correct: true}
      ]
    },
    {
      question: 'My father ___ very busy last week.',
      answer:[
        {option: 'are', correct: false},
        {option: 'were', correct: false},
        {option: 'was', correct: true}
      ]
    },
    {
      question: '___ your father taller than you?',
      answer:[
        {option: 'Is', correct: true},
        {option: 'Does', correct: false},
        {option: 'Are', correct: false}
      ]
    },
  ]


  constructor() { }

  getQuizzz(){
    return this.quizzz;
  }
}
