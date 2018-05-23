var bubbleSize = 40;
var bubble1;
var bubble2;
function setup() {
  createCanvas(500,400);
  bubble1 = {x: random (0, width), y:random (0, height), d: 40, c: color('red')};
  bubble2 = {x: random (0, width), y:random (0, height), d: 40, c: color('blue')};
}

function draw() {
  background(0);
  fill(bubble1.c);
  fill(bubble2.c);
  ellipse(bubble1.x, bubble1.y, bubbleSize, bubbleSize);
  ellipse(bubble2.x, bubble2.y, bubbleSize, bubbleSize);

  bubble1.x += random(-2, 2);
  bubble1.y += random(-2, 2);
  bubble2.x += random(-2, 2);
  bubble2.y += random(-2, 2);
}