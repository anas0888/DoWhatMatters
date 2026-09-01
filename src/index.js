import "./style.css";
import { addTask } from "./addTask.js";
import { inbox } from "./inbox.js";

// addTask 
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

  submit.onclick = () => {
    const userText = userInput.value;

    const taskBox = document.createElement("div");
    const taskText = document.createElement("span");
    const doneBtn = document.createElement("button");

    taskText.textContent = userText;
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", () => {
      taskText.classList.toggle("completed");
    });

    inboxContainer.append(taskBox);
    taskBox.append(taskText);
    taskBox.append(doneBtn);

    dialog.close();
    userInput.value = "";
  };
});
