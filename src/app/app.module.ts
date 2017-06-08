import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule}  from '@angular/router';
import {FormsModule}   from '@angular/forms';

import {BookService} from './book.service';

import {AppComponent}  from './app.component';
import {DashboardComponent} from './dashboard.component';
import {BookDetailComponent} from './book-detail.component';
import {BookListComponent} from './book-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'books',
        component: BookListComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'book/:id',
        component: BookDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
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
