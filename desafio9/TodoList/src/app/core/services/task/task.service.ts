import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '../../models/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`);
  }

  deleteTask(id:string): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/tasks/${id}`);
  }

  postTask(task: Task): Observable<Task>{
    return this.http.post<Task>(`${this.baseUrl}/tasks`, task);
  }

  updateTask(task: Task): Observable<Task>{
    return this.http.put<Task>(`${this.baseUrl}/tasks/${task.id}`, task);
  }

  
}
