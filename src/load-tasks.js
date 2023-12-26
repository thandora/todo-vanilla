import { createListNode } from "./task-lists-node";
import { createTaskNoteNode } from "./taskNode";

const CONTAINER_CLASS = "tasks";
const TASK_TITLE_CLASS = "list-title";

function loadLists(lists) {
  const domTaskLists = document.querySelector(".task-lists");

  for (const list of lists) {
    const listNode = createListNode(list.title);

    attachLoadTasks(listNode, list);
    attachLoadTitle(listNode, list);

    domTaskLists.appendChild(listNode);
  }
}

function attachListEvents(listNodes) {
  // Toggles "active" class state.
  for (const listNode of listNodes) {
    listNode.addEventListener("click", () => {
      listNodes.forEach((node) => {
        node.classList.remove("active");
      });

      if (!listNode.classList.contains("active")) {
        listNode.classList.add("active");
      }
    });
  }
}

function attachLoadTasks(listNode, list) {
  listNode.addEventListener("click", () => {
    loadTasks(list.tasks, CONTAINER_CLASS);
  });
}

function attachLoadTitle(listNode, list) {
  listNode.addEventListener("click", () => {
    document.querySelector(`.${TASK_TITLE_CLASS}`).textContent = list.title;
  });
}
function loadTasks(tasks, containerClass) {
  const domTasks = document.querySelector(`.${containerClass}`);

  for (const task of tasks) {
    const taskNode = createTaskNoteNode(task);
    domTasks.appendChild(taskNode);
  }
}

export { loadLists, attachListEvents };