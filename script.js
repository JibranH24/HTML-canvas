"use strict";
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");



requestAnimationFrame(cycle);



let x = 180;
let y = 250;
let dx = 10;
let dy = 10;
let ballRadius = 40;


function redBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
}


function cycle() {
    ctx.clearRect(0, 0, c.width, c.height); //Clears the canvas
    redBall();
    //draw the ball
    //move the ball
    //check against walls
    x += dx;
    y += dy;
    // if(y + dy < 500) {
    // dy = -dy;
    // }
    if (y + dy > c.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    if (x + dx > c.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    requestAnimationFrame(cycle); // calls the next frame (1/60th of a second later)
}
//# sourceMappingURL=script.js.map