import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private _http: HttpClient) {}

  addTask(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/posts', data); // Assuming 'posts' is the correct endpoint
  }

  getTaskList(): Observable<any[]> {
    return this._http.get<any[]>('http://localhost:3000/posts');
  }
}
