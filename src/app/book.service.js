"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_books_1 = require("./mock-books");
var BookService = (function () {
    function BookService() {
    }
    BookService.prototype.getBooks = function () {
        return Promise.resolve(mock_books_1.BOOKS);
    };
    BookService.prototype.getBook = function (id) {
        return this.getBooks().then(function (books) { return books.find(function (book) { return book.id === id; }); });
    };
    return BookService;
}());
BookService = __decorate([
    core_1.Injectable()
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map