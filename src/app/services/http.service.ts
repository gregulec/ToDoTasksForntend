import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://applicatione29428c7.azurewebsites.net/api/tasks/';

  constructor(private http: HttpClient) {
    this.getTasks();
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB);

  }

  addTask(task: Task) {
    this.http.post(this.URL_DB, task).subscribe();
  }

  removeTask(task: Task) {
    const idTask = task._id;
    this.http.delete(this.URL_DB + idTask).subscribe();
  }

  updateTask(task: Task) {
    this.http.put(this.URL_DB, task).subscribe();
  }
}
