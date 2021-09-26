var _hue1;
var _hue2;


let num = 15;
let range = window.screen.width / 2;


let ax = [];
let ay = [];

let bx = [];
let by = [];


function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    //cnv.parent('sketch-holder')
    _hue1=0;
    _hue2=300
    for ( let i = 0; i < num; i++ ) {
        ax[i] = width / 2;
        ay[i] = height / 2;

        bx[i] = width / 2;
        by[i] = height / 2;
    }
    frameRate(60);
}

function draw() {
  background(0);

  // Shift all elements 1 place to the left
  for ( let i = 1; i < num; i++ ) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];

    bx[i - 1] = bx[i];
    by[i - 1] = by[i];
  }

  // Put a new value at the end of the array
  ax[num - 1] += random(-range, range);
  ay[num - 1] += random(-range, range);

  bx[num - 1] += random(-range, range);
  by[num - 1] += random(-range, range);

  // Constrain all points to the screen
  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height);

  bx[num - 1] = constrain(bx[num - 1], 0, width);
  by[num - 1] = constrain(by[num - 1], 0, height);

  // Draw a line connecting the points
  for ( let j = 1; j < num; j++ ) {
    //let _speed = random(0,20)
      if (j % 5 == 0) {
          if (_hue1 > 360) {
              _hue1 = 0;
            } else {
                _hue1++;
            }
        }
    colorMode(HSB);
    let val = j / num * 204.0 + 51;
    stroke(_hue1, val, 200);
    strokeWeight(5)
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
  }

  for ( let j = 1; j < num; j++ ) {
    //let _speed = random(0,20)
      if (j % 5 == 0) {
          if (_hue2 > 360) {
              _hue2 = 0;
            } else {
                _hue2++;
            }
        }
    colorMode(RGB, 250);
    let val = j / num * 204.0 + 51;
    stroke(_hue2, val, 200);
    line(bx[j - 1], by[j - 1], bx[j], by[j]);
  }
}