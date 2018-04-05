var xPosition = 250;
var yPosition = 250;
var xSpeed = 1;
var ySpeed =1;
var diameter = 100;
var randomColor;

function setup() {
  createCanvas(500,500);
  randomColor = color (0);
}

function draw() {
  //frameRate(30);
  
  background(100,250,0);
  fill (randomColor);
  diameter = mouseX;
  ellipse(xPosition, yPosition, diameter, diameter); //adds 1 each time it runs
    xPosition += xSpeed;
  if ((xPosition + 50 >= width) || (xPosition -50 <= 0)) {
    xSpeed *= -1;
  }
  yPosition += ySpeed;
 if ((yPosition + 50 >= height) || (yPosition -50 <= 0)) {
     ySpeed *= -1;
}
}

function mousePressed(){
  randomColor = color(random(255), random (255), random(255));
  stroke(random (255), random (255), random (255));
}