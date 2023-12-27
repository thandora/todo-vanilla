import { Task } from "./task";
import { TaskManager } from "./task-manager";
import { ListManager } from "./list-manager";
import { loadLists, attachListEvents } from "./load-tasks";
import "./style.css";

// Create  tasks
const task1 = new Task("Task Title", "Task description", "Task duedate", 1);
const task2 = new Task(
  "Another Task",
  "This is a pretty long task description, wouldn't you say?This is a pretty long task description, wouldn't you say?This is a pretty long task description, wouldn't you say?",
  "not now",
  5
);
const task3 = new Task("buy flour", "at supermarket", "this week", "2");

// Create task lists
const list1 = new TaskManager("General");
const list2 = new TaskManager("Shopping");
// Add tasks to list
list1.addTask(task1);
list1.addTask(task2);
list2.addTask(task3);

// Create list manager
const listManager = new ListManager();
listManager.addList(list1);
listManager.addList(list2);

// Load lists DOM
loadLists(listManager.lists);
const listNodes = document.querySelectorAll(".btn-list");
attachListEvents(listNodes);
