const todos = document.querySelectorAll(".todos");
const status = document.querySelectorAll(".status");

todos.forEach((todos) => {
    todos.addEventListener("dragstart", dragStart);
    todos.addEventListener("dragend", dragEnd);
});

function dragStart() {
    console.log("dragStart");
}

function dragEnd() {
    console.log("dragEnd");
}


status.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
})

function dragOver() {
    console.log("dragOver");
}

function dragEnter() {
    console.log("dragEnter");
}

function dragLeave() {
    console.log("dragLeave");
}







// credits: https://www.youtube.com/watch?v=m3StLl-H4CY //