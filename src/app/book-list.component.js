"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var book_service_1 = require("./book.service");
var BookListComponent = (function () {
    function BookListComponent(bookService) {
        this.bookService = bookService;
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    BookListComponent.prototype.getHeroes = function () {
        var _this = this;
        this.bookService.getBooks().then(function (books) { return _this.books = books; });
    };
    BookListComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
    };
    return BookListComponent;
}());
BookListComponent = __decorate([
    core_1.Component({
        selector: 'book-list',
        template: "\n<h4>Books</h4>\n<ul class=\"books\">\n  <li *ngFor=\"let book of books\"\n    [class.selected]=\"book === selectedBook\"\n    (click)=\"onSelect(book)\">\n    <span class=\"badge\">{{book.id}}</span> {{book.title}}\n  </li>\n</ul>\n\n<book-detail [book]=\"selectedBook\"></book-detail>\n",
        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .books {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .books li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .books li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .books li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .books .text {\n    position: relative;\n    top: -3px;\n  }\n  .books .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
    }),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookListComponent);
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=book-list.component.js.map