import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { DictionaryComponent } from './dictionary/dictionary.component';
import { WordsComponent } from './words/words.component';

const routes: Routes = [
  {
      path: '',
      component: WordsComponent
  },
  {
    path: 'dictionary',
    component: DictionaryComponent
  },
  {
    path: 'dictionary/:phrase',
    component: DictionaryComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    WordsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
