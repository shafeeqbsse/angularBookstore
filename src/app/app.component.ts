import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h3>{{title}}</h3>
<nav>
  <a routerLink="/dashboard">Dashboard</a>
  <a routerLink="/books">Books</a>
</nav>
<router-outlet></router-outlet>
`
})
export class AppComponent {
  title = 'Bookstore';
}
