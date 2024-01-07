function createListNode(list) {
  const container = document.createElement("li");
  container.textContent = list.title;
  container.classList.add("nav-list");
  container.setAttribute("data-list-id", list.id);

  return container;
}

function createDeleteListNode() {
  const button = document.createElement("button");
  button.classList.add("btn-delete-list");
  return button;
}

export { createListNode, createDeleteListNode };
