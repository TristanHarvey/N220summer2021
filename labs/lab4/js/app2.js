let xPos = 0;
let yPos = 20;

let xSpeed = 1;
let ySpeed = 1;

function setup() {
    createCanvas(600,600);
}

function draw() {
    background(100, 1000, 70)
    rect(20, 570, 560, 40);

    circle(50, 25, 40);
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed
}

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

    var colliding = false;

    if(circleX > rectX && circleX < rectX + rectW) {

        if(circleY > rectY && circleY < rectY + rectH) {

              return true;

        }

   }

   return false;

}