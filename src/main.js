//  import { getFromLs, saveInLs } from "./js/local-storage-api";
//  import { refs } from "./js/refs";

// saveInLs('tasks', [{ title, description }, {}]);
//  saveInLs('theme', 'dark')

// const tasks = getFromLs('tasks');
// console.log(tasks)

import { refs } from "./js/refs";
import { addTasks, initTasks } from "./js/tasks";

initTasks()

refs.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputName = e.target.elements.taskName.value.trim();
  const taskDescription = e.target.elements.taskDescription.value.trim();

  if (!inputName || !taskDescription) {
    return alert("Field all input")
  };

  const task = {
    title: inputName,
    description: taskDescription,
  }
console.log(task)
  refs.form.reset()

  addTasks(task)
 
});