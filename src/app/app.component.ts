import {Component} from '@angular/core';
import {Langauge} from './Language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private currentLanguage = Langauge.PL;
  private learningLanguage = Langauge.ENG;
  private currentLanguages = [Langauge.PL, Langauge.ENG];
  private learningLanguages = [Langauge.PL, Langauge.ENG];

  constructor() {
    this.currentLanguages = this.currentLanguages.filter(language => language === this.learningLanguage);
    this.learningLanguages = this.learningLanguages.filter(language => language === this.currentLanguage);
  }
}
