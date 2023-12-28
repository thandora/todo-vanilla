function assignPriorityClass(priorityNumber) {
  const priorityBar = document.querySelector(".form-column.priority-bar");

  const priorityClasses = {
    1: "priority-high",
    2: "priority-normal",
    3: "priority-low",
  };

  for (const [num, pClass] of Object.entries(priorityClasses)) {
    if (priorityNumber === +num) {
      priorityBar.classList.add(pClass);
    } else {
      priorityBar.classList.remove(pClass);
    }
  }
}

export { assignPriorityClass };
