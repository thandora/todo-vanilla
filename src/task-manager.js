let listCounter = 0;

class TaskManager {
  // Class for holding a set of tasks. Contains methods to add, remove, and retrieve tasks.
  constructor(title) {
    this.id = ++listCounter;
    this.title = title;
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

export { TaskManager };
