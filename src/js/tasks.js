import { getFromLs, saveInLs, TASKS_LS_KEY } from "./local-storage-api";
import { renderTasks } from "./render-tasks";

const tasks = getFromLs(TASKS_LS_KEY) || [];


export function addTasks(task) {
    tasks.push(task);
    renderTasks(tasks);

    saveInLs(TASKS_LS_KEY, tasks);
};

export function initTasks() {
    renderTasks(tasks);
}