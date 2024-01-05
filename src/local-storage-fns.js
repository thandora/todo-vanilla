import { listManager } from "./list-manager";
import { Task } from "./task";
import { TaskManager } from "./task-manager";

function saveLocalListManager() {
  localStorage.setItem("listManager", JSON.stringify(listManager));
}

function loadLocalListManager() {
  const rawlistManager = JSON.parse(localStorage.getItem("listManager"));

  rawlistManager.lists.forEach((rawList) => {
    listManager.addList(parseList(rawList));
  });
}

function parseTask(rawTask) {
  const title = rawTask.title;
  const description = rawTask.description;
  const dueDate = new Date(rawTask.dueDate);
  const createDate = new Date(rawTask.createDate);
  const priority = rawTask.priority;

  const parsedTask = new Task(title, description, dueDate, createDate, priority);
  parsedTask.id = rawTask.id;

  return parsedTask;
}

function parseList(rawList) {
  const title = rawList.title;

  const parsedList = new TaskManager(title);
  rawList.tasks.forEach((rawTask) => {
    parsedList.addTask(parseTask(rawTask));
  });

  parseList.id = rawList.id;
  return parsedList;
}

export { saveLocalListManager, loadLocalListManager };
