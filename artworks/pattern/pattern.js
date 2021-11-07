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
  push();
  translate(width/2, height/2);
  rotate(- theta + 90);
  for(var i =0; i < width * 70/height; i++){
    //stroke(_hue%360,100,100)
    rect(0, 0,
    i*multiplier,
    i*multiplier);
  }
  pop();

  // rect-2
  push();
  translate(width/2, height/2);
  rotate(theta);
  for(var i =0; i < width * 70/height; i++){
    //stroke((_hue%360+180)%360,100,100)
    rect(0, 0,
    i*multiplier,
    i*multiplier);
  }
  pop();
  theta += rotationSpeed;

  // if(Date.now()-start_time > 1000){
  //   _hue += 10;
  //   print(_hue%360);
  //   start_time = Date.now();
  // }

}