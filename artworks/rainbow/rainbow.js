var _hue;
// var cnv;

// function centerCanvas() {
//   var x = (windowWidth - width) / 2;
//   var y = (windowHeight - height) / 2;
//   cnv.position(x, y);
// }

function setup() {
	let cnv = createCanvas(windowWidth * 0.9, windowHeight * 0.9);
  cnv.parent('sketch-holder')
	//centerCanvas();
	background(0);
	//cnv.parent('sketch-holder');
	_hue=0;
	// let a = createA('https://knozdogan.github.io', 'back');
	// a.position(10, 10);
}

function draw() {
  if (mouseIsPressed)
  {
  if (_hue > 360) {
    _hue = 0;
  } else {
    _hue++;
  }
  colorMode(HSL, 360);
  noStroke();
  fill(hue, 200, 200);
  ellipse(mouseX, mouseY, 20, 20);
  }
}

/* full screening will change the size of the canvas */
// function windowResized() {
//   centerCanvas();
//   background(0);
// }
