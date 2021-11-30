// user input form
const form = document.querySelector("form")
form.addEventListener("submit", addTask)

// task list
const taskList = document.querySelector("ul");
taskList.addEventListener("click", delTask)

// delTask
function delTask(event) {
    if(event.target.textContent === "X") {
        if(confirm("ARE U SURE ABOUT DELETING THAT?")){
            event.target.parentElement.remove()
        }
    }
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
    // clear form input value
    document.querySelector("#task").value = ""
    event.preventDefault()

}

