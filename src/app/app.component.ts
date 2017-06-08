import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h3>{{title}}</h3>
<a routerLink="/books">Books</a>
<router-outlet></router-outlet>
`
})
export class AppComponent {
  title = 'Bookstore';
}
