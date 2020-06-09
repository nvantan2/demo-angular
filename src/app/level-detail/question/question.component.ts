import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('question') question: any;
  // tslint:disable-next-line:no-input-rename
  @Input('choices') choices: any;
  @Output() nextQuestion = new EventEmitter();

  constructor(private dataService: DataService) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges() {
    setTimeout(() => this.onClickAnswer(''), 5000);
    clearTimeout();
  }
  ngOnInit(): void {}

  onClickAnswer(answer: string) {
    this.nextQuestion.emit();
    if (answer !== this.question.meanings[1]) {
      this.dataService.setAnswersIncorrect(this.question);
    }
  }
}
