import { loadTasks } from "./load-tasks";
import { listManager } from "./list-manager";
import { clearNode } from "./load-tasks";

const TASKS_CONTAINER_CLASS = "tasks";

function saveChanges(task) {
  task.title = document.querySelector("#task-title").value;
  task.description = document.querySelector("#task-description").value;
  task.priority = +document.querySelector("#priority-select").value;
  task.dueDate = document.querySelector("#due-date").value;
}

function attachSaveTask() {
  document.querySelector("button[type='button']").addEventListener("click", () => {
    const activeList = getCurrentList();
    const activeTask = getCurrentTask();

    saveChanges(activeTask);
    clearNode(`.${TASKS_CONTAINER_CLASS}`);
    loadTasks(activeList.tasks, TASKS_CONTAINER_CLASS);
  });
}

function getCurrentTask() {
  const taskId = getCurrentTaskId();
  const currentList = getCurrentList();

  return currentList.tasks.find((task) => {
    return task.id === taskId;
  });
}

function getCurrentTaskId() {
  return +document.querySelector("#taskId").value;
}

function getCurrentList() {
  const listId = getCurrentListId();

  return listManager.lists.find((list) => {
    return list.id === listId;
  });
}

function getCurrentListId() {
  return +document.querySelector(".btn-list.active").getAttribute("data-list-id");
}

export { attachSaveTask, getCurrentList, getCurrentTask };
