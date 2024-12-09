import { Component, input } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { FormsModule } from '@angular/forms';
import { Task } from '../../core/models/task.model';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskCardComponent, FormsModule, ButtonComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  listTitle = input('Lista 1');


  taskList: Task[] = [];

  id: number = 1;
  task:string = '';

  addTask(){
    if(this.task != ''){
      const newTask = {title:this.task, done: false, id: this.id};
      this.taskList.push(newTask);
      this.task = '';
      this.id+=1;
    }
  }

  deleteTask(id: number){
    this.taskList = this.taskList.filter(task =>task.id !== id);
  }
}
