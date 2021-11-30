var rectSize;

function setup(){
    createCanvas(windowWidth, windowHeight);
    noStroke();
    frameRate(20);
    rectMode(CENTER);
    rectSize = windowWidth * 0.3;
    background(50);
}

function draw(){
    push();
    translate(width / 2, height / 2);
    rotate(degrees(frameCount));
    scale(frameCount%width * 0.01);
    fill(0,0,0,4);
    rect(0,0,rectSize,rectSize);
    pop();

    print(frameCount%width)
    if(frameCount%width===0){
        background(50);
    }
}