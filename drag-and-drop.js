// Drag and Drop function that allows user to drag a to-do item from one column to the next //
const todos = document.querySelectorAll(".todos");
const status = document.querySelectorAll(".status");
let dragTodo = null;

todos.forEach((todos) => {
    todos.addEventListener("dragstart", dragStart);
    todos.addEventListener("dragend", dragEnd);
});

function dragStart() {
    dragTodo = this;
    console.log("dragStart");
}

function dragEnd() {
    dragTodo = null;
    console.log("dragEnd");
}


status.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
})

function dragOver(e) {
    e.preventDefault();
    console.log("dragOver");
}

function dragEnter() {
    this.style.backgroundColor = "blue";
    
    console.log("dragEnter");
}

function dragLeave() {
    this.style.backgroundColor = "transparent";

    console.log("dragLeave");
}

function dragDrop() {
    this.appendChild(dragTodo);
    this.style.backgroundColor = "transparent";

    console.log("dragDrop");
}

// Add to-do items popup window appears when clicked on the "+ Add To Do" button//
const popup = document.querySelectorAll("[data-target-popup]");
const close_popup = document.querySelectorAll(".close_popup");

popup.forEach((popup) => {
    popup.addEventListener("click", () => {
        document.querySelector(popup.dataset.targetPopup).classList.add("active");
        overlay.classList.remove("active");
    });
});

close_popup.forEach((popup) => {
    popup.addEventListener("click", () => {
        const popup = popup.closest(".popup");
        popup.classList.remove("active");
        overlay.classList.remove("active");
    })
});

popup.onclick = (event) => {
    if (event.target == overlay) {
        const popup = document.querySelectorAll(".popup");
        popup.forEach((popup) => popup.classList.remove("active"));
        overlay.classList.remove("active");
    }
}

const todo_submit = document.getElementById("todo_submit");

todo_submit.addEventListener("click", createToDo);

function createToDo() {
    const todos_div = document.createElement("div");
    const input_val = document.getElementById("to-do_input").value;
    const text = document.createTextNode(input_val);

    todos_div.appendChild(text);
    todos_div.classList.add("todos");
    todos_div.setAttribute("draggable", "true");

    const span = document.createElement("span");
    const span_text = document.createTextNode("\u00D7");
    span.classList.add("close-toggle");
    span.appendChild(span_text);

    todos_div.appendChild(span);
    no_status.appendChild(todos_div);

    popup_form.classList.remove("active");

    console.log(todos_div);
}

// credits: https://www.youtube.com/watch?v=m3StLl-H4CY //