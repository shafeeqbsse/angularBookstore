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
var book_1 = require("./book");
var BookDetailComponent = (function () {
    function BookDetailComponent() {
    }
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
    })
], BookDetailComponent);
exports.BookDetailComponent = BookDetailComponent;
//# sourceMappingURL=book-detail.component.js.map