// user input form
const form = document.querySelector("form")
form.addEventListener("submit", addTask)

// task list
const taskList = document.querySelector("ul");
taskList.addEventListener("click", delTask)

// Deleete button-link
const deleteBtn = document.querySelector("#delete-tasks")
deleteBtn.addEventListener("click", delTasks)

function delTasks(event) {
    //taskList.innerHTML = " "  SEE KOORMAB PROTSESSOREID, ERITI KUI ROHKEM ANDMEID
   while(taskList.firstChild){
       taskList.removeChild(taskList.firstChild)
   }
   removeAllStorage()
}
// RemoveALlstorage
function removeAllStorage(){
    localStorage.removeItem("tasks")
}


// delTask
function delTask(event) {
    if(event.target.textContent === "X") {
        if(confirm("ARE U SURE ABOUT DELETING THAT?")){
            event.target.parentElement.remove()
            let task = event.target.parentElement.textContent.slice(0, -1)
            removeStorage(task)
        }
    }
}
// Remove storage
function removeStorage(task){
    let tasks
    if(localStorage.getItem("tasks") === null){
        tasks = []
    } else{
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    tasks.forEach(function(taskFromLS, taskIndex){
        if(taskFromLS === task){
            tasks.splice(taskIndex, 1)
        }
    })

    localStorage.setItem("tasks", JSON.stringify(tasks))
}


// addTask function
function addTask(event) {
    //get task value from form input
    const task = document.querySelector('#task').value
    console.log(event.type)
    // get element from DOM
    const taskList = document.querySelector("ul");
    // Create element to DOM
    const li = document.createElement("li")
    // Add CSS class
    li.className = "collection-item"
    // Add text to element
    const text = document.createTextNode(task)
    li.appendChild(text)
    // Create link
    const link = document.createElement("a")
    // Add CSS style
    link.className = "secondary-content"
    // Add text
    link.appendChild(document.createTextNode("X"))
    // Add href attribute
    link.setAttribute("href", "#")
    // Add link to Li
    li.appendChild(link)
    // Add li to taskList
    taskList.appendChild(li)
    // Save task to local storage
    taskStorage(task)
    // clear form input value
    document.querySelector("#task").value = ""
    event.preventDefault()

}
//local storage salvestamine
function taskStorage(task){
    let tasks
    if(localStorage.getItem("tasks") === null){
        tasks = []
    } else{
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))
}