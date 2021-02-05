let xPos = 0;
let yPos = 40;

let xSpeed = 2;
let ySpeed = 0;

function setup() {
    createCanvas(800,600);
}

function draw() {
    background(64,200,110)
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    var myBool = xPos > 100;
    console.log(myBool);

    fill(20,70,30);
    circle(xPos, yPos, 30);
}