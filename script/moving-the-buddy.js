// MAKE MY BUDDY MOVE //
dragElement(document.getElementById ("moving-buddy"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "handle")) {
        document.getElementById(elmnt.id + "handle").onmousedown = dragMouseDown;
    }
    else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDeafult();

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDafault();

        pos2
    }
}

