var theta1 = 0.0;
var theta2 = 180.0;
//var theta3 = 240.0;
var multiplier = 8;
var rectWidthMultiplier = 10;
var rectHeightMultiplier = 20;
var rotationSpeed1 = 0.005;
var rotationSpeed2 = 0.005;
//var rotationSpeed3 = 0.003;
var color_palette = 0;
//var numRect = 3600;

function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100);
  background(0);
}

function draw() {
  var numRect = windowWidth;
  noFill();

  var color1 = color(color_palette%360, 100, 100);
  var color2 = color((color_palette+180)%360, 100, 100)

  //stationary rect
  push();
  translate(width/2, height/2);
  rotate(theta1)
  for(var i =0; i < numRect; i++){
    stroke(color1)
    rect(0, 0,
    i*multiplier,
    i*multiplier);
  }
  pop();
  theta1 += rotationSpeed1;

  //rotating rect
  push();
  translate(width/2, height/2);
  rotate(theta2);
  for(var i =0; i < numRect; i++){
    stroke(color2)
    rect(0, 0,
    i*multiplier,
    i*multiplier);
  }
  pop();
  theta2 -= rotationSpeed2;

  // push();
  // translate(width/2, height/2);
  // rotate(theta3);
  // for(var i =0; i < numRect; i++){
  //   stroke(0,255,0)
  //   rect(0, 0,
  //   i*multiplier,
  //   i*multiplier);
  // }
  // pop();
  // theta3 += rotationSpeed3;
  
  if(color_palette == 360){
    color_palette = 0;
  }else{
    color_palette++;
  }
}