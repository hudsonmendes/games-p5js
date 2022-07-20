let rec;
let colour;
let colourName;

function setup() {
  createCanvas(1200, 800)
  background(135, 206, 235)
}

function draw() {
  drawGround()
}

function drawGround() {
  noStroke()
  fill(126, 200, 80)
  ellipse(width/2, height, width*2, height/3)
}