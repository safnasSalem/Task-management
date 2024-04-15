import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Task } from 'src/app/models/tasks/tasks.module'; // Import Task interface

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  constructor(private http: HttpClient) { }

  addTask(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/tasks', data);
  }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/tasks`).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  getTaskById(id: string): Observable<Task> {
    return this.http.get<Task>(`/api/tasks/${id}`);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`/api/tasks/${task.id}`, task);
  }
  deleteTask(task: Task): Observable<void> {
    const url = `http://localhost:3000/tasks/${task.id}`; 
    return this.http.delete<void>(url).pipe(
      catchError((error: any) => {
        console.error('Error deleting task:', error);
        throw error; 
      })
    );
  }
  updateTasks(task: Task): Observable<Task> {
    const url = `http://localhost:3000/tasks/${task.id}`; 
    return this.http.put<Task>(url, task).pipe(
      catchError((error: any) => {
        console.error('Error updating task:', error);
        throw error; 
      })
    );
  }
}
