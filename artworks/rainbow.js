var hue;

function setup() {
	createCanvas(windowWidth * 0.8, windowHeight * 0.8);
	background(0);
	hue=0;
	let a = createA('https://knozdogan.github.io', 'back');
	a.position(10, 10);
}

function draw() {
  if (mouseIsPressed)
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
