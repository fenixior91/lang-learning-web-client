import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Word} from '../word';
import {Meaning} from '../meaning';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})

export class DictionaryComponent implements OnInit {

  private languages: Array<string> = ['PL', 'ENG'];
  private wordTypes: Array<string> = ['NOUN', 'VERB', 'ADJECTIVE', 'ADVERB'];
  private word: Word = new Word('', '', '', 0, []);
  private apiRoot = 'http://localhost:8080/api';

  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(routeResponse => {
      if (routeResponse.phrase === undefined) {
        this.word = new Word('', this.wordTypes[0], this.languages[0], 0, [new Meaning('', this.wordTypes[0], this.languages[0], [])]);
      } else {
        const url = `${this.apiRoot}/words/${routeResponse.phrase}`;
        this.http.get(url).subscribe(apiResponse => this.word = apiResponse.json());
      }
    });
  }

  ngOnInit() {
  }

  addMeaningInput() {
    this.word.meanings.push(new Meaning('', this.word.wordType, this.word.language, []));
  }

  onSubmit() {
    const url = `${this.apiRoot}/words`;
    if (this.word.id === undefined) {
      this.http.post(url, this.word).subscribe(res => this.word = res.json());
    } else {
      this.http.put(url, this.word).subscribe(res => this.word = res.json());
    }
  }
}
