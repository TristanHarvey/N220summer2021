let sunX = 40;

function setup() {
    createCanvas(400,300);
    background(100);
    sunX = 0;
}

function draw() {
    background(00);
    
    sunX ++;
    drawSun("#4237f5", 15, mouseY - 10, sunX - 10);
    drawSun("#32a852", 15, mouseY, sunX);

}

function drawSun(sunColor, numRays, yHeight, xHeight) {

    fill(sunColor);
    stroke(sunColor);

    for(var i = 0; i < numRays; i++) {
        line(xHeight, yHeight, i* 16, 120);
    }

    circle(xHeight, yHeight, 40);
}