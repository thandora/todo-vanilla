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

export { Task };
