var stagioni;
//var t = 50;

function preload() {
  stagioni = loadImage("stagioni.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  angleMode(DEGREES);
  frameRate(30);
}

function draw() {
  imageMode(CENTER);
  image(stagioni, windowWidth / 2, windowHeight / 2, 600, 600);
  // cambiare da MouseX a framerate oppure posizione di circle

  if (frameCount < 49) {
    //if (mouseX < windowWidth / 2 - 150) {
    noStroke();
    fill(0, 0, 0, 180);
    rect(windowWidth / 2 - 150, 0, 450, windowHeight); // Left
  } else if (frameCount < 90) {
    //else if (mouseX < windowWidth / 2) {
    noStroke();
    fill(0, 0, 0, 180);
    rect(windowWidth / 2 - 300, 0, 150, windowHeight);
    rect(windowWidth / 2, 0, 300, windowHeight); // Middle
  } else if (frameCount < 120) {
    // else if (mouseX < windowWidth / 2 + 150) {
    noStroke();
    fill(0, 0, 0, 180);
    rect(windowWidth / 2 - 300, 0, 300, windowHeight);
    rect(windowWidth / 2 + 150, 0, 150, windowHeight); // Middle2
  } else {
    noStroke();
    fill(0, 0, 0, 180);
    rect(windowWidth / 2 - 300, 0, 450, windowHeight); // Right
  }

  stroke("yellow");
  fill(255, 255, 0, 95);
  ellipseMode(CENTER);

  translate(width / 2, height / 2);
  rotate(frameCount * 1);
  ellipse(-275, -20, 35, 35);

  if (frameCount == 180) {
    noLoop();
  }
}
