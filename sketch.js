var hr,mn,sc;
var hrangle,mnangle,scangle;


function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();
  
  scangle = map(sc,0,60,0,360);
  mnangle = map(mn,0,60,0,360);
  hrangle = map(hr % 12,0,12,0,360);

  //hour hand//
  push();
  rotate(hrangle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  //minute hand//
  push();
  rotate(mnangle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,80,0);
  pop();

    //second//
    push();
    rotate(scangle);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop();
  noFill();
  // arc for sc hand
  stroke("red");
  strokeWeight(5);
  arc(0,0,300,300,0,scangle);
  
  stroke("green");
  strokeWeight(5);
  arc(0,0,280,280,0,mnangle);

  stroke("blue");
  strokeWeight(5);
  arc(0,0,260,260,0,hrangle);
  
  
  drawSprites();
} 