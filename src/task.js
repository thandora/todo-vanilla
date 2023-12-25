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

class TaskManager {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  getTasks() {
    return this.tasks;
  }
}

export { Task, TaskManager };
