import { Component } from '@angular/core';
import { cardData } from './components/card/card.data';
import { Card } from './model/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume_project';
  cards: Card[] = cardData;
}
