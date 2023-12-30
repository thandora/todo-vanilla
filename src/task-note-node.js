import { format } from "date-fns";
const DATE_FORMAT = "MMM d yyyy";

function createTaskNoteNode(task) {
  const taskNode = document.createElement("div");

  const priorityContainer = document.createElement("div");
  priorityContainer.textContent = task.priority;
  let dueDate = "";
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
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.appendChild(btnDelete);

  taskNode.append(header, body, footer);
  taskNode.classList.add("note-view");
  taskNode.setAttribute("data-task-id", task.id);
  return taskNode;
}

export { createTaskNoteNode };
