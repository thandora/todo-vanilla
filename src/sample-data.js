import { TaskManager } from "./task-manager";
import { Task } from "./task";

const list1 = new TaskManager("General");
const list2 = new TaskManager("Shopping");

list1.addTask(
  new Task("Task Title", "Task description", new Date("2023-05-02"), 1, new Date())
);
list1.addTask(
  new Task(
    "Another Task",
    "This is a pretty long task description, wouldn't you say?This is a pretty long task description, wouldn't you say?This is a pretty long task description, wouldn't you say?",
    new Date("2022-02-04"),
    2,
    new Date()
  )
);

list2.addTask(new Task("buy flour", "at supermarket", new Date("2023-12-25"), 2, new Date()));
list2.addTask(
  new Task("buy chocolate", "at supermarket", new Date("2023-12-25"), 3, new Date())
);

const lists = [list1, list2];

export { lists };
