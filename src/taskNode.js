function createTaskNoteNode(task) {
  const taskNode = document.createElement("div");

  const priorityContainer = document.createElement("div");
  priorityContainer.textContent = task.priority;
  const dueContainer = document.createElement("div");
  dueContainer.textContent = task.dueDate;

  const header = document.createElement("div");
  header.classList.add("header");
  header.append(priorityContainer, dueContainer);

  const taskTitle = document.createElement("p");
  taskTitle.textContent = task.title;

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("task-delete");
  const footer = document.createElement("div");
  footer.appendChild(btnDelete);

  taskNode.append(header, taskTitle, footer);
  taskNode.classList.add("note-view");
  return taskNode;
}

export { createTaskNoteNode };
