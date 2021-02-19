function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(100);

    noFill();

    for( var i = 0; i < 15; i++) {

        var color = Math.random() * 255;
        console.log(color);

        stroke(255 - (i*20));

        rect(150,80,200, i * 10);
    }

}