class ListManager {
  // Class for holding lists.
  constructor() {
    this.lists = [];
  }

  addList(list) {
    this.lists.push(list);
  }

  removeList(listId) {
    this.lists = this.lists.filter((list) => list.id !== listId);
  }
}

const listManager = new ListManager();
export { listManager };
