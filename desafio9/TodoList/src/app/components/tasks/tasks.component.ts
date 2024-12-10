import { Component, inject, input, OnInit } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { FormsModule } from '@angular/forms';
import { Task } from '../../core/models/task.model';
import { ButtonComponent } from '../button/button.component';
import { TaskService } from '../../core/services/task/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskCardComponent, FormsModule, ButtonComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  listTitle = input('Lista 1');

  private tasksService = inject(TaskService);


  taskList: Task[] = [];

  task: string = '';

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe(
      {
        next: (tasks: Task[]) => {
          this.taskList = tasks;
        },
        error: (error) => {
          alert('Error getting tasks')
        }
      })
  }

  addTask() {
    if (this.task != '') {
      const id = Math.random().toString(36).substring(7);
      const newTask = { title: this.task, done: false, id: id };

      this.tasksService.postTask(newTask).subscribe({
          next: (task: Task) => {
            this.taskList.push(task);
          },
          error: (error) => {
            alert('Error getting tasks')
          }
        });

      this.task = '';
    }
  }

  deleteTask(id: string) {

    this.tasksService.deleteTask(id).subscribe({
      next: () => {
        this.taskList = this.taskList.filter(task => task.id !== id);
      },
      error: (error) => {
        alert('Error getting tasks');
      }
    });

  }

  updateTask(task: Task) {

    this.tasksService.updateTask(task).subscribe({
      next: (task: Task) => {
        this.taskList = this.taskList.map(t => t.id === task.id ? task : t);
      },
      error: (error) => {
        alert('Error getting tasks');
      }
    });
    
  }
}
