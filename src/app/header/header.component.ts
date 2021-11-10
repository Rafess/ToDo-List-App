import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  title = "To-Do List"
  // classes = ['classe 1', 'classe 2'];
  ngOnInit(): void {
  }

}
// [class]='expreção' -> para uma tag que vai ter mais de uma classe colocar entre array aqui no TS. Ja no html fica <h1 [class]="classes"></h1> 
// [class"nome da classe"]= "expreção" -> para uma classe unica