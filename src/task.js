let idCounter = 0;

class Task {
  constructor(title, description, dueDate, priority) {
    this.id = ++idCounter;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const TaskManager = (function () {
  const tasks = [];

  function addTask(task) {
    tasks.push(task);
  }

  function removeTask(taskId) {
    tasks = tasks.filter((task) => task.id !== taskId);
  }

  function getTasks() {
    return this.tasks;
  }

  return { addTask, removeTask, getTasks };
})();

export { Task, TaskManager };
