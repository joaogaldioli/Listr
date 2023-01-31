export interface Task {
    id?: string;
    name: string;
    userId: string;
    type: string;
    description: string;
    frequency: Map<string, string>;
    schedule: string[];
    taskGroup?: string;
}
