import "./style.css";
import "./addTask.js"
import "./inbox.js";
import { addTask } from "./addTask.js";
import { inbox } from "./inbox.js";



const addTaskBtn = document.querySelector('.addTaskBtn');
addTaskBtn.addEventListener('click',() => {
    const newTask = addTask();
const inboxContainer = inbox();

inboxContainer.append(newTask);
})