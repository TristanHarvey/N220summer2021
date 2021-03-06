class Particle {

    x = Math.random() * 600;
    y = Math.random() * 400;
    velocity = { x: 5, y: 50 };

    update() {
        circle(this.x, this.y, 20);

        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }

}


let particles = [];

function setup() {
    createCanvas(600,400);
    background(100);

    for(var i =0; i < 123; i++) {
        particles[i] = new Particle();
    }
}

function draw() {
    for(var i =0; i < particles.length; i++) {
        particles[i].update();
    }

}