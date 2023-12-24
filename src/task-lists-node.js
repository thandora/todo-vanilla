function createListNode(listName) {
  const container = document.createElement("button");
  container.textContent = listName;
  container.classList.add("btn-list");

  return container;
}

export { createListNode };
