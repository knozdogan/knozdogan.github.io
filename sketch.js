function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(30);
  textFont('Helvetica');
  //stroke(0, 102);
}

function draw() {
  //background(0);
  //var weight = dist(touchX, touchY, ptouchX, ptouchY);
  //strokeWeight(weight);
  //line(touchX, touchY, ptouchX, ptouchY);
  fill(0);
  text("UNDER DEVELOPMENT", 100, windowHeight/4);
  fill(153);
  ellipse(mouseX, mouseY, 20, 20);
}
