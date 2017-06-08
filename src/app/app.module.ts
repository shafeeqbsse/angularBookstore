import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {BookService} from './book.service';

import {AppComponent}  from './app.component';
import {DashboardComponent} from './dashboard.component';
import {BookDetailComponent} from './book-detail.component';
import {BookListComponent} from './book-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
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
