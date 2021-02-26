let sunX = 40;

function setup() {
    createCanvas(600,600);
}

function draw() {
    background(100);
    
    sunX ++;
    drawSun("#293452", 15, mouseY - 10, sunX - 10);
    drawSun("#fcda52", 15, mouseY, sunX);

}

function drawSun(sunColor, numRays, yHeight, xHeight) {

    fill(sunColor);
    stroke(sunColor);

    for(var i = 0; i < numRays; i++) {
        line(xHeight, yHeight, i* 5, 120);
    }

    circle(xHeight, yHeight, 40);
}