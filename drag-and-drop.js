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

// Add to-do items popup window //
const popup = document.querySelectorAll("[data-target-popup]");
const close_popup = document.querySelectorAll(".close_popup");

popup.forEach((popup) => {
    popup.addEventListener("click", () => {
        document.querySelector(popup.dataset.target).classList.add("active");
        overlay.classList.remove("active");
    });
});

close_popup.forEach((popup) => {
    popup.addEventListener("click", () => {
        const
    })
}

// credits: https://www.youtube.com/watch?v=m3StLl-H4CY //