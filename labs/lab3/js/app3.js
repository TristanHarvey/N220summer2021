
let positions = [];

function setup() {
    createCanvas(800, 600);
}

let value = 0;
function draw() {
    background(100);




    
        for( var i =0; i < positions.length; i++) {
            fill(value);
            rect( positions[i][0], positions[i][1], 150, 20);
            positions[i][1] = positions[i][1] +5
        }


}

function mouseClicked() {
    if (value === 0){
    positions.push([ mouseX, mouseY ]);
  }
}