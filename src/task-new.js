import { loadTaskView } from "./load-task-view";
import { Task } from "./task";
import { listManager } from "./list-manager";
import { getCurrentList } from "./task-edit";

function attachNewTask() {
  // Add event listener to "add new task" button which allows creation
  // of new task
  const btnNewTask = document.querySelector(".tasks-container .title-container .add-list");
  btnNewTask.addEventListener("click", newTaskEvent);
}

function newTaskEvent() {
  const newTask = new Task("", "", "", "2", new Date());
  const currentList = getCurrentList();
  currentList.addTask(newTask);
  loadTaskView(newTask);
}

export { attachNewTask };
