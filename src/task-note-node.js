import { format } from "date-fns";
import { getCurrentList, getCurrentTask } from "./task-edit";
import { clearNode, loadTasks } from "./load-tasks";
import { loadTaskView } from "./load-task-view";
import { saveLocalListManager } from "./local-storage-fns";

const DATE_FORMAT = "MMM d yyyy";
const CONTAINER_CLASS = "tasks";

function createTaskNoteNode(task) {
  const taskNode = document.createElement("div");

  const priorityContainer = document.createElement("div");
  priorityContainer.textContent = task.priority;
  let dueDate = undefined;
  if (task.dueDate) {
    dueDate = format(task.dueDate, DATE_FORMAT);
  }
  const dueContainer = document.createElement("div");
  dueContainer.textContent = dueDate;

  const header = document.createElement("div");
  header.classList.add("header");
  header.append(priorityContainer, dueContainer);

  const taskTitle = document.createElement("h3");
  taskTitle.classList.add("title");
  taskTitle.textContent = task.title;
  const taskDescription = document.createElement("p");
  taskDescription.classList.add("description");
  taskDescription.textContent = task.description;
  const body = document.createElement("div");
  body.classList.add("body");
  body.append(taskTitle, taskDescription);

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("task-delete");
  attachDeleteTask(btnDelete, task);
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.appendChild(btnDelete);

  taskNode.append(header, body, footer);
  taskNode.classList.add("note-view");
  taskNode.setAttribute("data-task-id", task.id);
  return taskNode;
}

function attachDeleteTask(node, task) {
  node.addEventListener("click", (e) => {
    clearNode(`.${CONTAINER_CLASS}`);

    if (getCurrentTask() === task) {
      loadTaskView(null);
    }

    const currentList = getCurrentList();
    currentList.removeTask(task.id);
    saveLocalListManager();
    loadTasks(currentList.tasks, CONTAINER_CLASS);

    e.stopPropagation();
  });
}

export { createTaskNoteNode };
