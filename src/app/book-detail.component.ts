import {Component, Input} from '@angular/core';

import {Book} from './book';

@Component({
  selector: 'book-detail',
  template: `
<div *ngIf="book">
  <h4>{{book.title}} details</h4>
  <div>
    <label>title: </label>
    <input [(ngModel)]="book.title" placeholder="title">
  </div>
  <div><label>id: </label>{{book.id}}</div>
  <div><label>author: </label>{{book.author}}</div>
</div>
`
})

export class BookDetailComponent {
  @Input() book: Book;
}
