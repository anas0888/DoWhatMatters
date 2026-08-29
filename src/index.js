import "./style.css";
import { addTask } from "./addTask.js";
import { inbox } from "./inbox.js";


const task = addTask();
document.body.appendChild(task);
const addTaskBtn = document.querySelector(".addTaskBtn");
const userInput = document.getElementById("userInput");

addTaskBtn.addEventListener("click", () => {
  const inboxContainer = inbox();

  const dialog = document.getElementById("taskDialog");
  const cancelBtn = document.getElementById("cancelBtn");
  const submit = document.getElementById("submitBtn");

  if (!dialog || !cancelBtn || !submit) {
    console.log("error in the dialog box: missing element(s)", { dialog, cancelBtn, submit });
    return; 
  }

  dialog.showModal();

  cancelBtn.onclick = () => {
    dialog.close();
  };

  submit.addEventListener("click", () => {
    const userText = userInput.value;

    const taskBox = document.createElement("div");
    taskBox.textContent = userText;

    inboxContainer.append(taskBox);
    dialog.close();
    userInput.value = "";
  });
});