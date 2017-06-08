import {Component, OnInit} from '@angular/core';

import {Book} from './book';
import {BookService} from './book.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getBooks().then(books => this.books = books.slice(1, 4));
  }
}
