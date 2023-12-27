let idCounter = 0;

class Task {
  constructor(title, description, dueDate, priority, createDate) {
    this.id = ++idCounter;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.createDate = createDate;
    this.priority = priority;
  }
}

export { Task };
