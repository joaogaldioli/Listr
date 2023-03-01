import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Task } from '../../models/task';

export interface TaskState extends EntityState<Task> {}

@Injectable({
    providedIn: 'root'
})

@StoreConfig({
    name: 'task'
})
export class TaskStore extends EntityStore<TaskState> {
    constructor() {
        super();
    }
}
