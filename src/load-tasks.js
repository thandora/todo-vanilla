import { createListNode } from "./task-lists-node";
import { createTaskNoteNode } from "./task-note-node";
import { assignPriorityClass, attachTaskView, loadTaskView } from "./load-task-view";

const CONTAINER_CLASS = "tasks";
const TASK_TITLE_CLASS = "list-title";

function loadLists(lists) {
  const domTaskLists = document.querySelector(".task-lists");

  for (const list of lists) {
    const listNode = createListNode(list);

    attachLoadTasks(listNode, list);
    attachLoadTitle(listNode, list);

    domTaskLists.appendChild(listNode);
  }
}

function attachLoadTasks(listNode, list) {
  listNode.addEventListener("click", () => {
    clearTaskView();
    loadTasks(list.tasks, CONTAINER_CLASS);
  });
}

function clearTaskView() {
  const tasksContainer = document.querySelector(`.${CONTAINER_CLASS}`);
  while (tasksContainer.firstChild) {
    tasksContainer.removeChild(tasksContainer.firstChild);
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

export { loadLists, attachActiveStateSwitch };
