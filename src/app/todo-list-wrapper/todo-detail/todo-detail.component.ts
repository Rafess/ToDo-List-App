import { PersistenceService } from './../../persistence.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/task';
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  task: Task;

  constructor(private route: ActivatedRoute, PersistenceService: PersistenceService) { 
    const taskId = this.route.snapshot.params["id"];
    this.task = PersistenceService.loadTask(taskId);
  }

  ngOnInit(): void {
    
  }

}
