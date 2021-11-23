// user input form
const form = document.querySelector("form")
form.addEventListener("submit", addTask)


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
    // Add li to taskList
    taskList.appendChild(li)
    // clear form input value
    document.querySelector("#task").value = ""
    event.preventDefault()

}

