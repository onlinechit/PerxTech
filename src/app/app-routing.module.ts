import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './books/books.component';
import { DemonstrateDirectiveComponent } from './demonstrate-directive/demonstrate-directive.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'dashboard', component: DashboardComponent,children:[
      {path:'books', component:BooksComponent},
      {path:'demonstrate-directive', component:DemonstrateDirectiveComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
