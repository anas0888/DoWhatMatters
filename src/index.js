import "./style.css";
import "./addTask.js"
import "./inbox.js";
import { addTask } from "./addTask.js";
import { inbox } from "./inbox.js";



const addTaskBtn = document.querySelector('.addTaskBtn');


const userInput = document.getElementById('userInput');

addTaskBtn.addEventListener('click', () => {
    const newTask = addTask();
    const inboxContainer = inbox(); 
    inboxContainer.append(newTask);

    const dialog = document.getElementById('taskDialog');
    const cancelBtn = document.getElementById('cancelBtn');

    if(dialog && cancelBtn){
        dialog.showModal();

        cancelBtn.onclick = () => {
            dialog.close();
        }
        }
        else{
            console.log("error in the dialog box")
        }



})

cancelBtn.addEventListener('click', () => {
    dialog.close();
});
