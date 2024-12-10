import { Component, input, output } from '@angular/core';
import { Task } from '../../core/models/task.model';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [NgClass, FormsModule, ButtonComponent],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  item = input.required<Task>();

  deleteTask = output<string>();
  updateTask = output<Task>();

  remover():void{
    this.deleteTask.emit(this.item().id)
  }

  atualizar(): void{
    this.updateTask.emit(this.item());
  }
}
