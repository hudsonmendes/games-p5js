let rec;
let cloudx = 100;
let cloudy = 100;
let blue = 189;
let sfx;

function preload() {
  sfx = loadSound('8-freight-train-58909.mp3');
}

function setup() {
  createCanvas(1200, 800)
}

function draw() {
  drawBackground()
  drawClouds();
  try {
    translate(0, height*3/4)
    push()
    drawTrain()
  }
  finally {
    pop()
  }
}

function mousePressed() {
  sfx.loop();
}

function drawBackground() {
  background(135, 206, 235)
  noStroke()
  fill(126, 200, 80)
  ellipse(width/2, height, width*2, height/3)
}

function drawClouds() {
  function makeCloud(cloudx, cloudy, ratio=1.0) {
    fill(250)
    noStroke();
    if (cloudx > width) cloudx = 0;
    ellipse(cloudx, cloudy, 70 * ratio, 50 * ratio);
    ellipse(cloudx + 10, cloudy + 10, 70 * ratio, 50 * ratio);
    ellipse(cloudx - 20, cloudy + 10, 70 * ratio, 50 * ratio);
  }

  makeCloud(cloudx, cloudy-50, 1.0);
  makeCloud(cloudx + 100, cloudy + 20, 2.0)
  makeCloud(cloudx - 250, cloudy + 20, 0.5)
  makeCloud(cloudx - 200, cloudy + 120, 2.8)
  makeCloud(cloudx - 300, cloudy + 120, 1.8)
  cloudx+=1;
  blue--;
}

function drawTrain() {
  stroke(0)
  noFill()
  const n = 5
  const carWidth = parseInt(width * 0.9 / n)
  const carHeight = 100
  for (let i = 0; i < 10; i++)
    try {
      push()
      translate(i*carWidth, 0)
      stroke(255)
      fill(140)
      rect(carWidth * 0.1, 0, carWidth * 0.9, carHeight)
      fill(255, 255, 255, 40)
      rect(carWidth * 0.2, carHeight * 0.1, carWidth * 0.7, carHeight/2)
    }
    finally {
      pop()
    }
}