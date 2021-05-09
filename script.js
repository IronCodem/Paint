let colorlist = ['yellow', 'blue', 'green', 'red', 'grey']

function setup() {
  createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {
  noStroke()
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 15, 15);
}

// 
