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
    setTimeout(() => {
        this.style.display = "none";
    }, 0);
    console.log("dragStart");
}

function dragEnd() {
    dragTodo = null;
    setTimeout(() => {
        this.style.display = "";
    }, 0);
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
    this.style.backgroundColor = "black";
    
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

// trying something with the up/down buttons

let downButton = document.querySelectorAll('.down-arrow')

downButton.forEach((press_downButton) => {
    press_downButton.onclick = () => {
        console.log("you clicked down!")
    
    }
})

// Add to-do items popup window appears when clicked on the "+ Add To Do" button//
const popup = document.querySelectorAll("[data-target-popup]");
const close_popup = document.querySelectorAll(".close_popup");
const overlay = document.getElementById("overlay");

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


    // adding the up and down toggle button for mobile media query //


    // delete "x" button //
    const span = document.createElement("span");
    const span_text = document.createTextNode("\u00D7");
    span.classList.add("close-toggle");
    span.appendChild(span_text);

    todos_div.appendChild(span);
    no_status.appendChild(todos_div);

    todos_div.addEventListener("dragstart", dragStart);
    todos_div.addEventListener("dragend", dragEnd);

    document.getElementById("to-do_input").value = "";

    const popup = document.getElementById("popup");
    popup.classList.remove("active");

    deleteToDo.forEach(button => {
        span.addEventListener("click", () => {
            span.parentElement.style.display = "none";
        });
    });

    console.log(todos_div);
}

// removing the "+ Add To-Do" popup window //
const remove_pop_up = document.getElementById("close-pop-up");

remove_pop_up.addEventListener("click", closePop);

function closePop() {
    remove_pop_up.parentElement.parentElement.classList.remove('active');
}

const deleteToDo = document.querySelectorAll(".close-toggle");

deleteToDo.forEach(button => {
    button.addEventListener("click", () => {
        button.parentElement.style.display = "none";
    });
});

// credits: https://www.youtube.com/watch?v=m3StLl-H4CY //



// Toggle up and down button feature for MOBILE //





// saving the inserted To Do tasks //
// const storeParams = () => {
//     let formParams = new FormData(formElement)

//     formParams.forEach((value, key) => {
//         localStorage.setItem(key, value)
//     });
// }