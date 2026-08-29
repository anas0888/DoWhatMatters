const addTask = () => {
const task = document.createElement('div');
task.innerHTML = `
<dialog id = "taskDialog">
    <p>Enter your task</p>
    <input type="text" id = "userInput" placeholder="Task of the day">
    </input>
    <div class = "dialogBtn">
        <button type="button" id = "cancelBtn">Cancel</button>
        <button type="submit" id = "submitBtn">Submit</button>
    </div>
</dialog>`


    return task;
}
export{addTask}