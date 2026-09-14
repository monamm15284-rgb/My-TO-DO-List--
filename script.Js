console.log("connected")
let title = document.getElementById("title");
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addTBtn");
let message = document.getElementById("Message");
let taskCount = document.getElementById("TaskCount");
let taskList = document.getElementById("taskList");
let count = 0;
addBtn.addEventListener("click", function(){
  let tasktext = taskInput.value;
  if(taskInput.value === ""){
    message.textContent = "Please enter a task";
    message.style.color = "red";
    return;
  }
 let li = document.createElement("li");
  
let taskSpan = document.createElement("span");
taskSpan.textContent = tasktext;

let noteInput = document.createElement("input");
noteInput.type = "text";
noteInput.placeholder = "Add a note";
noteInput.className = "note";

let deleteBtn = document.createElement("button");
deleteBtn.className = "deleteBtn";
 deleteBtn.textContent = "Delete"; 
li.appendChild(taskSpan);
li.appendChild(noteInput);
li.appendChild(deleteBtn);
taskList.appendChild(li);

   count++;
  taskCount.textContent = count;

  message.textContent = "Added Task Successfully";
  message.style.color = "green";

  taskInput.value = "";

  deleteBtn.addEventListener("click", function(){
    li.remove();
    count--;
    taskCount.textContent = count;
    message.textContent = "Task Deleted";
    message.style.color = "red";
  })
});