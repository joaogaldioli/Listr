import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task';
import { TaskStore } from 'src/app/data/task-data/task.store';

@Injectable({
    providedIn: 'root'
})

export class TaskService {
    constructor(private http: HttpClient, private store: TaskStore) {
        
    }

    getTasks(userId: string): Observable<Task[]> {
        return this.http.get<Task[]>('/task/' + userId).subscribe(x => {
            this.store.set(x);
        });
    }

    createTask(task: Task): Observable<void> {
        return this.http.post<void>('/task/', task);
    }

    deleteTask(taskId: string): Observable<void> {
        return this.http.delete<void>('/task/' + taskId);
    }

    updateTask(taskId: string, task: Task): Observable<Task> {
        return this.http.put<Task>('/task/' + taskId, task);
    }
}
