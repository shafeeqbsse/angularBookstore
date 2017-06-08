import {Component, OnInit} from '@angular/core';

import {Book} from './book';
import {BookService} from './book.service';

@Component({
  selector: 'book-list',
  template: `
<h4>Books</h4>
<ul class="books">
  <li *ngFor="let book of books"
    [class.selected]="book === selectedBook"
    (click)="onSelect(book)">
    <span class="badge">{{book.id}}</span> {{book.title}}
  </li>
</ul>

<book-detail [book]="selectedBook"></book-detail>
`,

  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .books {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .books li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .books li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .books li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .books .text {
    position: relative;
    top: -3px;
  }
  .books .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class BookListComponent implements OnInit {
  books: Book[];
  selectedBook: Book;


  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}
