import { Task } from './../task';
import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list-line',
  templateUrl: './todo-list-line.component.html',
  styleUrls: ['./todo-list-line.component.css']
})
export class TodoListLineComponent implements OnInit {
  @Input() task: Task = new Task("","","");
  @Output() taskRemoved= new EventEmitter();

  words : string[] = ["gambiarrento", "boçal", "Armless John", "puta", "caralho"];
  constructor() {}

  ngOnInit(): void {
  }

  remove(): void {
    this.taskRemoved.emit(this.task.name);
  }
  verifyDurtyWords() {
    return (this.words.some(word => this.task.name.includes(word)));
  }
}
