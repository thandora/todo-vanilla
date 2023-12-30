import { createListNode } from "./task-lists-node";
import { createTaskNoteNode } from "./task-note-node";
import { attachTaskView } from "./load-task-view";
import { listManager } from "./list-manager";
import { TaskManager } from "./task-manager";

const CONTAINER_CLASS = "tasks";
const TASK_TITLE_CLASS = "list-title";

function attachNewList() {
  // Add event listener to "add new list" button which allows update to
  // the lists section DOM.
  document.querySelector(".lists-container .footer p").addEventListener("click", () => {
    const newList = new TaskManager("New list");
    listManager.addList(newList);
    loadLists(listManager.lists);

    let listNodes = document.querySelectorAll(".btn-list");
    attachActiveStateSwitch(listNodes);

    const newListNode = document.querySelector(`.btn-list[data-list-id="${newList.id}"]`);
    newListNode.setAttribute("contenteditable", true);
    newListNode.classList.add("active");

    selectAllText(newListNode);

    newListNode.focus();

    newListNode.addEventListener("keyup", () => {
      newList.title = newListNode.textContent;
      document.querySelector(`.${TASK_TITLE_CLASS}`).textContent = newList.title;
    });
  });
}

function selectAllText(node) {
  const range = document.createRange();
  range.selectNodeContents(node);

  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

function loadLists(lists) {
  const domTaskLists = document.querySelector(".task-lists");
  clearNode(".task-lists");

  for (const list of lists) {
    const listNode = createListNode(list);

    attachLoadTasks(listNode, list);
    attachLoadTitle(listNode, list);

    domTaskLists.appendChild(listNode);
  }
}

function attachLoadTasks(listNode, list) {
  listNode.addEventListener("click", () => {
    clearNode(`.${CONTAINER_CLASS}`);
    loadTasks(list.tasks, CONTAINER_CLASS);
  });
}

function clearNode(querySelector) {
  const node = document.querySelector(querySelector);
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function loadTasks(tasks, containerClass) {
  const domTasks = document.querySelector(`.${containerClass}`);

  for (const task of tasks) {
    const taskNode = createTaskNoteNode(task);
    attachTaskView(taskNode, task);
    domTasks.appendChild(taskNode);
  }
}

function attachLoadTitle(listNode, list) {
  listNode.addEventListener("click", () => {
    document.querySelector(`.${TASK_TITLE_CLASS}`).textContent = list.title;
  });
}

function attachActiveStateSwitch(listNodes) {
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

export { loadLists, attachActiveStateSwitch, attachNewList };
