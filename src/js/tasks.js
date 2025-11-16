import { getFromLs, saveInLs, TASKS_LS_KEY } from "./local-storage-api";
import { renderTasks } from "./render-tasks";

let tasks = getFromLs(TASKS_LS_KEY) || [];


export function addTasks(task) {
    tasks.push(task);
    renderTasks(tasks);

    saveInLs(TASKS_LS_KEY, tasks);
};

export function initTasks() {
    renderTasks(tasks);
}

export function deleteTasks(title) {
    
    tasks = tasks.filter(task => task.title !== title);

    renderTasks(tasks)
    saveInLs(TASKS_LS_KEY, tasks)
}