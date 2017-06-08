import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule}  from '@angular/router';
import {FormsModule}   from '@angular/forms';

import {AppComponent}  from './app.component';
import {BookDetailComponent} from './book-detail.component';
import {BookListComponent} from './book-list.component';
import {BookService} from './book.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'books',
        component: BookListComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})


export class AppModule {
}
