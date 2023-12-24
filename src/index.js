import { Task, TaskManager } from "./task";
import { createTaskNoteNode } from "./taskNode";
import { createListNode } from "./task-lists";
import "./style.css";

const task1 = new Task("Task Title", "Task description", "Task duedate", 1);
const task2 = new Task("bb", "cc", "not now", 5);

TaskManager.addTask(task1);

const taskNode = createTaskNoteNode(task1);
document.querySelector(".tasks").appendChild(taskNode);
document.querySelector(".task-lists").appendChild(createListNode("list 1- Favorites"));

console.log(TaskManager.getTasks());
