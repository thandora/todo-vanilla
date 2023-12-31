import { Task } from "./task";
import { TaskManager } from "./task-manager";
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
import { loadTaskView } from "./load-task-view";
import { attachNewTask } from "./task-new";

// Tasks container
const TASKS_CONTAINER_CLASS = "tasks";

// Create  sample tasks
const task1 = new Task("Task Title", "Task description", new Date("2023-05-02"), 1, new Date());
const task2 = new Task(
  "Another Task",
  "This is a pretty long task description, wouldn't you say?This is a pretty long task description, wouldn't you say?This is a pretty long task description, wouldn't you say?",
  new Date("2022-02-04"),
  2,
  new Date()
);
const task3 = new Task("buy flour", "at supermarket", new Date("2023-12-25"), 2, new Date());
const task4 = new Task("buy chocolate", "at supermarket", new Date("2023-12-25"), 3, new Date());

// Create task lists
const list1 = new TaskManager("General");
const list2 = new TaskManager("Shopping");
// Add tasks to list
list1.addTask(task1);
list1.addTask(task2);
list2.addTask(task3);
list2.addTask(task4);

// Create list manager
listManager.addList(list1);
listManager.addList(list2);

//// Load DOM
loadLists(listManager.lists);
const listNodes = document.querySelectorAll(".btn-list");
attachActiveStateSwitch(listNodes);
// Attach event for adding new list
attachNewList();
loadTasks(listManager.lists[0].tasks, TASKS_CONTAINER_CLASS, listManager.lists[0]);
loadTitle(listManager.lists[0]);
document.querySelector(".btn-list").classList.add("active");
loadTaskView(listManager.lists[0].tasks[0]);
// Attach event for saving changes on task
attachSaveTask();
// Attach event for adding new task
attachNewTask();

