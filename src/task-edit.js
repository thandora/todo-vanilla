import { loadTasks } from "./load-tasks";
import { listManager } from "./list-manager";
import { clearNode } from "./load-tasks";

const TASKS_CONTAINER_CLASS = "tasks";

function saveChanges(task) {
  task.title = document.querySelector("#task-title").value;
  task.description = document.querySelector("#task-description").value;
  task.priority = document.querySelector("#priority-select").value;
  task.dueDate = document.querySelector("#due-date").value;
}

function attachSaveTask() {
  document.querySelector("button[type='button']").addEventListener("click", () => {
    const taskId = +document.querySelector("#taskId").value;
    const listId = +document.querySelector(".btn-list.active").getAttribute("data-list-id");

    const activeList = listManager.lists.find((list) => {
      return list.id === listId;
    });

    const activeTask = activeList.tasks.find((task) => {
      return task.id === taskId;
    });

    saveChanges(activeTask);
    clearNode(`.${TASKS_CONTAINER_CLASS}`);
    loadTasks(activeList.tasks, TASKS_CONTAINER_CLASS);
    console.log(activeTask);
  });
}

export { attachSaveTask };
