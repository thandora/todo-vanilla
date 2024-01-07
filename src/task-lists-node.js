import { listManager } from "./list-manager";
import { loadLists } from "./load-tasks";
import { saveLocalListManager } from "./local-storage-fns";
import { TaskManager } from "./task-manager";

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

function eventDeleteList(listId) {
  listManager.removeList(listId);
  loadLists(listManager.lists);
}

function attachDeleteList() {
  const listNodes = document.querySelectorAll(".nav-list");
  for (const listNode of listNodes) {
    const btnDelete = listNode.querySelector(".btn-delete-list");
    btnDelete.addEventListener("click", () => {
      const listId = +listNode.getAttribute("data-list-id");
      eventDeleteList(listId);
      saveLocalListManager();
    });
  }
}

export { createListNode, createDeleteListNode, attachDeleteList };
