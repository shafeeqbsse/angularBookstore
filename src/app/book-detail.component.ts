import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {Book} from './book';
import {BookService} from './book.service';

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

export class BookDetailComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bookService.getBook(+params['id'])) // + converts string to number
      .subscribe(book => this.book = book);
  }

  @Input() book: Book;
}
