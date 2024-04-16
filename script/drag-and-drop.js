// Drag and Drop function that allows user to drag a to-do item from one column to the next //
const todos = document.querySelectorAll(".todos");
const status = document.querySelectorAll(".status");
let dragTodo = null;

// if (todoItem.class == 'todos') {
//     let todoItem =
//     `
//         <div class="toggle-button todos-mobile">
//             <button class="up-arrow">&#8963;</button>
//             <button class="down-arrow">&#8963;</button>
//         </div>

//         <div class="todos_content">
//             <p>Get started by adding your first to-do item :)</p>
//             <p class="close-toggle">&times;</p>
//         </div>
//     `
//     channelBlocks.insertAdjacentHTML('beforeend', todoItem)
// }


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

// Up and Down Buttons to Toggle switching the order //

let downButton = document.querySelectorAll('.down-arrow');

downButton.forEach((press_downButton) => {
    press_downButton.onclick = () => {
        let todoItem = press_downButton.parentNode;
        let nextStatusSection = todoItem.nextElementSibling;

        if (nextStatusSection && nextStatusSection.tagName === 'DIV') {
            let currentStatus = todoItem.getAttribute('data-status');
            let nextStatus = nextStatusSection.getAttribute('data-status');

            if (currentStatus === 'not-started' && nextStatus === 'in-progress') {
                todoItem.setAttribute('data-status', nextStatus);
                nextStatusSection.appendChild(todoItem);
            } else if (currentStatus === 'in-progress' && nextStatus === 'completed') {
                todoItem.setAttribute('data-status', nextStatus);
                nextStatusSection.appendChild(todoItem);
            }
        }
    }
});

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


// Creating new todo content //

function createToDo() {
    const todoContainer = document.getElementById("no_status");
    const inputVal = document.getElementById("to-do_input").value;

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todos");
    todoDiv.setAttribute("draggable", "true");


    // Recreate the .todos content with the up and down arrows //
    const toggleButtonDiv = document.createElement("div");
    toggleButtonDiv.classList.add("toggle-button", "todos-mobile");
    const upArrowButton = document.createElement("button");
    upArrowButton.classList.add("up-arrow");
    upArrowButton.innerHTML = "&#8963;";
    const downArrowButton = document.createElement("button");
    downArrowButton.classList.add("down-arrow");
    downArrowButton.innerHTML = "&#8963;";
    toggleButtonDiv.appendChild(upArrowButton);
    toggleButtonDiv.appendChild(downArrowButton);
    todoDiv.appendChild(toggleButtonDiv);

    
    // Creating the content here when input value //
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("todos_content");

    const textP = document.createElement("p");
    textP.textContent = inputVal;

    const closeSpan = document.createElement("span");
    closeSpan.classList.add("close-toggle");
    closeSpan.textContent = "\u00D7";
    contentDiv.appendChild(textP);
    contentDiv.appendChild(closeSpan);
    todoDiv.appendChild(contentDiv);
    todoContainer.appendChild(todoDiv);


    document.getElementById("to-do_input").value = "";

    todoDiv.addEventListener("dragstart", dragStart);
    todoDiv.addEventListener("dragend", dragEnd);

    closeSpan.addEventListener("click", function() {
        todoDiv.style.display = "none";
    });

    // I need to close the popup overlay after inputing the content //
    document.getElementById("popup").classList.remove("active");
    document.getElementById("overlay").classList.add("active");

    console.log(todoDiv);
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