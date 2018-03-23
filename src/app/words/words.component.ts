import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Word} from '../word';
import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  private apiRoot = 'http://localhost:8080/api';
  private words: Array<Word>;
  public selectedWord: Word = new Word('', '', '', 0, []);

  constructor(private http: Http, config: NgbTypeaheadConfig) {
    config.showHint = true;
    const url = `${this.apiRoot}/words`;
    this.http.get(url).subscribe(res => this.words = res.json());
  }

  ngOnInit() {
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map(word => word.length < 3 ? [] : this.words.filter(v => v.phrase.toLowerCase().indexOf(word.toLowerCase()) > -1).slice(0, 10));

  formatter = (x: { phrase: string }) => x.phrase;

  showMeanings() {
    console.log(this.selectedWord.meanings);
  }
}
