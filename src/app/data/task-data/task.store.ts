import { Injectable } from '@angular/core';
import { EntityState } from '@datorama/akita';
import { EntityStore, StoreConfig } from '@datorama/akita/src/lib';
import { Task } from 'src/app/models/task';

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
