import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Task } from './core/models/task.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title: string = 'Todo List';
  welcomeMessage: string = "Olá pessoal, como estão?";
  showList: boolean = true;
  namesList: string[] = ['Eduardo', 'de', 'Souza', 'Carrilho']

  tasks: Task[] = [
    {title: 'Estudar Angular', done: false},
    {title: 'Estudar React', done: true},
    {title: 'Estudar Vue', done: false}
  ];

  taskToAdd: string = "";


  constructor(){
    console.log("Loaded!")
  }
  ngOnInit(): void {
    console.log("Init");
  }

  helloWorld(){
    console.log("Hello World!");

  }

  updateTitle(title:string){
    this.title = title;
  }

  addTask(){
    if(this.taskToAdd != ""){
      this.tasks.push({title: this.taskToAdd, done: false})
    this.taskToAdd = "";
    }
    
  }


}
