var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false; //when page loads, app assumes user is not holding down the mouse button

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//connects the points on the string to create a smooth line
context.lineWidth = radius * 2;


//putpoint - puts down a circle where user clicks the mouse
//dragging creates a line when left button is held down
//path is made up of points and lines
var putPoint = function(e) {
    if (dragging) {
        context.lineTo(e.clientX, e.clientY)
        context.stroke();
        context.beginPath(); //clears current path and starts a new one
        //e.client will work in firefox.  returns X and Y coordinates
        context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY)
    }
}

var engage = function(e) {
    dragging = true;
    putPoint(e);
}

var disengage = function() {
    dragging = false;
    context.beginPath(); //clears previous path to prevent new line from engaging to previous line
}

//adding an event listener - reacts to input or signal
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);