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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var book_1 = require("./book");
var book_service_1 = require("./book.service");
var BookDetailComponent = (function () {
    function BookDetailComponent(bookService, route, location) {
        this.bookService = bookService;
        this.route = route;
        this.location = location;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.bookService.getBook(+params['id']); }) // + converts string to number
            .subscribe(function (book) { return _this.book = book; });
    };
    return BookDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", book_1.Book)
], BookDetailComponent.prototype, "book", void 0);
BookDetailComponent = __decorate([
    core_1.Component({
        selector: 'book-detail',
        template: "\n<div *ngIf=\"book\">\n  <h4>{{book.title}} details</h4>\n  <div>\n    <label>title: </label>\n    <input [(ngModel)]=\"book.title\" placeholder=\"title\">\n  </div>\n  <div><label>id: </label>{{book.id}}</div>\n  <div><label>author: </label>{{book.author}}</div>\n</div>\n"
    }),
    __metadata("design:paramtypes", [book_service_1.BookService,
        router_1.ActivatedRoute,
        common_1.Location])
], BookDetailComponent);
exports.BookDetailComponent = BookDetailComponent;
//# sourceMappingURL=book-detail.component.js.map