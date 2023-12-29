function createListNode(list) {
  const container = document.createElement("button");
  container.textContent = list.title;
  container.classList.add("btn-list");
  container.setAttribute("data-list-id", list.id);

  return container;
}

export { createListNode };
