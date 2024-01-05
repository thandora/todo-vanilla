import { loadTaskView } from "./load-task-view";
import { Task } from "./task";
import { getCurrentList } from "./task-edit";
import { loadTasks, clearNode } from "./load-tasks";

const TASKS_CONTAINER_CLASS = "tasks";

function attachNewTask() {
  // Add event listener to "add new task" button which allows creation
  // of new task
  const btnNewTask = document.querySelector(".tasks-container .title-container .add-list");
  btnNewTask.addEventListener("click", () => {
    newTaskEvent();
    const titleNode = document.querySelector("textarea");
    titleNode.select();
  });
}

function newTaskEvent() {
  const newTask = new Task("Untitled task", "", undefined, 2, new Date());
  const currentList = getCurrentList();
  currentList.addTask(newTask);
  clearNode(`.${TASKS_CONTAINER_CLASS}`);
  loadTasks(currentList.tasks, TASKS_CONTAINER_CLASS);
  loadTaskView(newTask);
}

export { attachNewTask };
