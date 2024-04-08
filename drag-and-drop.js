const todos = document.querySelectorAll(".todos")

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