import {NgModule}      from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {BookDetailComponent} from './book-detail.component';
import {BookListComponent} from './book-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'books', component: BookListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'book/:id', component: BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
