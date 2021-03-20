let positions = [];

function setup() {
    createCanvas(800,600);
    noStroke();
   
    for( var i =0; i < positions.length; i++) {
        fill(value);
        circle( positions[i][0], positions[i][1], 150, 20);
        positions[i][1] = positions[i][1] +5
    }

}


let value = 0;
function draw() {
    background(100);
    fill(200,204,0);
    circle(200,90,20);
    circle(600,90,20);
    circle(400,90,20);
    circle(300,90,20);
    circle(100,90,20);
    circle(500,90,20);
    circle(800,90,20);
    circle(700,90,20);
    circle(750,90,20);
    circle(50,90,20);

}

function mouseClicked() {
    if (value === 0){
    positions.push([ mouseX, mouseY ]);
  }
}