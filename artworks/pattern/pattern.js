var theta = Date.now()%360;
var rotationSpeed = 0.001;
var multiplier = 10;
//var _hue = 0;
var start_time=Date.now();

function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  //colorMode(HSB,360,100,100);
}

function draw() {
  background(255);
  noFill();

  // rect-1
  rotatingRect(true);

  // rect-2
  rotatingRect(false);

  // increase theta
  theta += rotationSpeed;

}

function rotatingRect(isReverse){
  push();
  translate(width/2, height/2);

  if(isReverse){
    rotate(- theta + 90);
  }else{
    rotate(theta);
  }

  for(var i =0; i < width * 70/height; i++){
    rect(0, 0,
    i*multiplier,
    i*multiplier);
  }

  pop();
}