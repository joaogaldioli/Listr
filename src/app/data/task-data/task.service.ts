import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TaskState, TaskStore } from './task.store';

@Injectable({
    providedIn: 'root'
})
export class TaskDataService {
    constructor(protected store: TaskStore) {}
}
