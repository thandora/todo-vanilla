import { listManager } from "./list-manager";

function saveLocalListManager() {
  localStorage.setItem("listManager", JSON.stringify(listManager));
}

function loadLocalListManager() {
  return JSON.parse(localStorage.getItem("listManager"));
}
