import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-wrapper',
  templateUrl: './todo-list-wrapper.component.html',
  styleUrls: ['./todo-list-wrapper.component.css']
})
export class TodoListWrapperComponent implements OnInit {

  public tasks: string[] = [];

  constructor() { }

  

  ngOnInit(): void {
  }

  add(task: any): void {
    this.tasks = [...this.tasks, task.value];
  }
  treatRemoval(event: any) {
    this.tasks = this.tasks.filter(task => task !== event);
  }

}
