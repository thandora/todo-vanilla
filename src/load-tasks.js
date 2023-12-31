import { createListNode, createDeleteListNode, attachDeleteList } from "./task-lists-node";
import { createTaskNoteNode } from "./task-note-node";
import { assignPriorityClass, attachTaskView } from "./load-task-view";
import { listManager } from "./list-manager";
import { TaskManager } from "./task-manager";
import { saveLocalListManager } from "./local-storage-fns";

const TASKS_CONTAINER_CLASS = "tasks";
const LISTS_CONTAINER_CLASS = "nav-lists";
const TASK_TITLE_CLASS = "list-title";

function attachNewList() {
  // Add event listener to "add new list" button which allows update to
  // the lists section DOM.
  document.querySelector(".lists-container .footer p").addEventListener("click", () => {
    const newList = new TaskManager("New list");
    listManager.addList(newList);
    saveLocalListManager();
    loadLists(listManager.lists);

    let listNodes = document.querySelectorAll(".nav-list");
    attachActiveStateSwitch(listNodes);

    const newListNode = document.querySelector(`.nav-list[data-list-id="${newList.id}"]`);
    newListNode.setAttribute("contenteditable", true);
    newListNode.classList.add("active");

    selectAllText(newListNode);

    newListNode.focus();
    clearNode(`.${TASKS_CONTAINER_CLASS}`);

    newListNode.addEventListener("keyup", (e) => {
      newList.title = newListNode.textContent;
      document.querySelector(`.${TASK_TITLE_CLASS}`).textContent = newList.title;

      if (e.key === "Enter") {
        newListNode.setAttribute("contenteditable", false);
      }
      saveLocalListManager();
    });
    attachDeleteList();
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
  const domTaskLists = document.querySelector(".task-lists .nav-lists");
  clearNode(`.${LISTS_CONTAINER_CLASS}`);

  for (const list of lists) {
    const listNode = createListNode(list);
    const deleteListNode = createDeleteListNode();
    listNode.appendChild(deleteListNode);

    attachLoadTasks(listNode, list);
    attachLoadTitle(listNode, list);

    domTaskLists.appendChild(listNode);
  }
  const listNodes = document.querySelectorAll(".nav-list");
  attachActiveStateSwitch(listNodes);
  attachDeleteList();
}

function attachLoadTasks(listNode, list) {
  listNode.addEventListener("click", () => {
    clearNode(`.${TASKS_CONTAINER_CLASS}`);
    loadTasks(list.tasks, TASKS_CONTAINER_CLASS);
  });
}

function clearNode(querySelector) {
  const node = document.querySelector(querySelector);
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function loadTasks(tasks, containerClass) {
  const tasksNode = document.querySelector(`.${containerClass}`);

  for (const task of tasks) {
    const taskNode = createTaskNoteNode(task);
    attachTaskView(taskNode, task);
    assignPriorityClass(taskNode.querySelector(".header"), task.priority);
    tasksNode.appendChild(taskNode);
  }
}

function attachLoadTitle(listNode, list) {
  listNode.addEventListener("click", () => {
    loadTitle(list);
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

function loadTitle(list) {
  document.querySelector(`.${TASK_TITLE_CLASS}`).textContent = list.title;
}

export { loadLists, attachActiveStateSwitch, attachNewList, loadTasks, clearNode, loadTitle };
