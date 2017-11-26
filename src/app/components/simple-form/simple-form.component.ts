import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Inject } from '@angular/core';
import {MailService} from '../../services/mail.service';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styles: [
    `
    :host { margin: 10px; }
    input:focus { font-weight: bold;}
   `
  ]
})

export class SimpleFormComponent implements OnInit {
  @Input() message: string;
  @Output() update = new EventEmitter<{text: string}>();

  constructor(
    @Inject(MailService) private mailService,
    @Inject('apiUrl') private apiUrl
  ) { }

  ngOnInit() {
  }

  onUpdate(id, text) {
    this.mailService.update(id, text);
  }

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }

}
