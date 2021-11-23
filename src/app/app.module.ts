import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListWrapperComponent } from './todo-list-wrapper/todo-list-wrapper.component';
import { TodoListLineComponent } from './todo-list-line/todo-list-line.component';
import { FormsModule } from '@angular/forms';
import { DurtyWordsDirective } from './durty-words.directive';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailComponent } from './todo-list-wrapper/todo-detail/todo-detail.component';
import {HttpClientModule} from '@angular/common/http'
const appRoutes: Routes = [
//  para cada rota, especificamos um componente aqui:
  { path: 'home', component: TodoListWrapperComponent },
  // Pagina/componente dos detalhes da tarefa:
  { path: 'task/:id', component: TodoDetailComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListWrapperComponent,
    TodoListLineComponent,
    DurtyWordsDirective,
    TodoDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
