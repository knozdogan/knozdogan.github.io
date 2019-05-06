function setup() {
  createCanvas(600,600);
  stroke(0, 102);
}

function draw() {
  //background(0);
  var weight = dist(touchX, touchY, ptouchX, ptouchY);
  strokeWeight(weight);
  line(touchX, touchY, ptouchX, ptouchY);
}
