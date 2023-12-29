import { format } from "date-fns";

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

function attachTaskView(taskNode, task) {
  taskNode.addEventListener("click", () => {
    loadTaskView(task);
  });
}

function loadTaskView(task) {
  document.querySelector("#task-title").value = task.title;
  document.querySelector("#task-description").value = task.description;
  document.querySelector("#priority-select").value = task.priority;
  document.querySelector("#due-date").value = format(task.dueDate, "yyyy-MM-dd");
}

// const currentDate = format(new Date(), "yyyy-MM-dd");
// document.querySelector("#dueDate").value = currentDate;
export { assignPriorityClass, attachTaskView, loadTaskView };
