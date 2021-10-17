var theta1 = 0.0;
var theta2 = 0.0;
var multiplier = 10;
var rectWidthMultiplier = 10;
var rectHeightMultiplier = 20;
var rotationSpeed = 0.001;
function setup() {
  createCanvas(600,600);
  rectMode(CENTER);
}

function draw() {
  background(255);
  noFill();

  //stationary rect
  push();
  translate(width/2, height/2);
  rotate(theta1)
  for(var i =0; i < 40; i++){
    rect(0, 0,
    i*multiplier,
    i*multiplier);
  }
  pop();
  theta1 -= rotationSpeed;

  //rotating rect
  push();
  translate(width/2, height/2);
  rotate(theta2);
  for(var i =0; i < 40; i++){
    rect(0, 0,
    i*multiplier,
    i*multiplier);
  }
  pop();
  theta2 += rotationSpeed;
}