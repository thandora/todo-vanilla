import { listManager } from "./list-manager";
import {
  loadLists,
  attachActiveStateSwitch,
  attachNewList,
  loadTasks,
  loadTitle,
} from "./load-tasks";
import "./style.css";
import { attachSaveTask } from "./task-edit";
import { loadTaskView, taskViewPriorityBarUpdater } from "./load-task-view";
import { attachNewTask } from "./task-new";
import { lists as sampleLists } from "./sample-data";
import { loadLocalListManager } from "./local-storage-fns";
import { attachDeleteList } from "./task-lists-node";

// Tasks container class
const TASKS_CONTAINER_CLASS = "tasks";

// Load listManager, from localStorage or from sample data.
if (localStorage.getItem("listManager") !== null) {
  loadLocalListManager();
} else {
  sampleLists.forEach((l) => listManager.addList(l));
}
//// Load DOM
loadLists(listManager.lists);

// Attach event for adding new list
attachNewList();
loadTasks(listManager.lists[0].tasks, TASKS_CONTAINER_CLASS, listManager.lists[0]);
loadTitle(listManager.lists[0]);
document.querySelector(".nav-list").classList.add("active");

// Load default task (1st task of 1st list)
// TODO do not load if task does not exist
loadTaskView(listManager.lists[0].tasks[0]);

// Attach task view priority bar class (and color) updater.
taskViewPriorityBarUpdater();

// Attach event for saving changes on task
attachSaveTask();

// Attach event for adding new task
attachNewTask();

attachDeleteList();
