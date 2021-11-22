import { PersistenceService } from './../persistence.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { v4 as uuidv4 } from 'uuid';
import { debounceTime, Subject } from 'rxjs';
@Component({
  selector: 'app-todo-list-wrapper',
  templateUrl: './todo-list-wrapper.component.html',
  styleUrls: ['./todo-list-wrapper.component.css']
})
export class TodoListWrapperComponent implements OnInit {

  public tasks: Task[] = [];

  taskValue: string= "";

  filter: string = "";
  filterTask: Subject<string> = new Subject<string>();

  constructor(private persistenceService: PersistenceService) { 
     this.tasks = this.persistenceService.loadFromLocalStorage();
     this.filterTask.pipe(debounceTime(1000))
     .subscribe(text => this.tasks = this.persistenceService.searchTask(text));
   }

  

  ngOnInit(): void {
  }
  
onFilterChange(newValue: string) {
  this.filterTask.next(newValue)
}

  add(task: any): void {
    const localTask = new Task(uuidv4(), task.value, task.value)
    this.tasks = [...this.tasks, localTask];
    this.persistenceService.addToLocalStorage(localTask.name)
  }
  treatRemoval(event: any) {
    this.tasks = this.tasks.filter(task => task !== event);
    this.persistenceService.loadToLocalStorage(this.tasks);
  }
  
}
