var hue;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	hue=0;
}

function draw() {
  if (mousePressed())
  {
  if (hue > 360) {
    hue = 0;
  } else {
    hue++;
  }
  colorMode(HSL, 360);
  noStroke();
  fill(hue, 200, 200);
  ellipse(mouseX, mouseY, 20, 20);
  }
}
