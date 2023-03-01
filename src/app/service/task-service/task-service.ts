import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Task } from 'src/app/models/task';
import { TaskStore } from 'src/app/data/task-data/task.store';

@Injectable({
    providedIn: 'root'
})

export class TaskService {
    constructor(private http: HttpClient, private store: TaskStore) {
        
    }

    getTasks(userId: string): Observable<Task[]> {
        return this.http.get<Task[]>('/task/' + userId).pipe(tap(x => {
            this.store.set(x);
        }),
        catchError((err) => {
            return throwError(err);
        }));
    }

    createTask(task: Task): Observable<void> {
        return this.http.post<void>('/task/', task).pipe(tap(x => {
            this.store.add(task);
        }),
        catchError((err) => {
            return throwError(err);
        }));
    }

    deleteTask(taskId: string): Observable<void> {
        return this.http.delete<void>('/task/' + taskId).pipe(tap(x => {
            this.store.remove(taskId);
        }),
        catchError((err) => {
            return throwError(err);
        }));
    }

    updateTask(taskId: string, task: Task): Observable<Task> {
        return this.http.put<Task>('/task/' + taskId, task).pipe(tap(x => {
            this.store.update(taskId, task);
        }),
        catchError((err) => {
            return throwError(err);
        }));
    }
}
