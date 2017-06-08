import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';

import {Book} from './book';
import {BookService} from './book.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',

  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  books: Book[];
  selectedBook: Book;


  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }

  gotoDetail(): void {
    this.router.navigate(['/book', this.selectedBook.id]);
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}
