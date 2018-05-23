var bubble1;

function setup()
{
    createCanvas(400,400);
    bubble1 = {x: random (0, width), y:random (0, height), d: 40, c: color(255)};
}

function draw() {
    background(0);
    fill(250);

    fill(bubble1.c);
    ellipse(bubble1.x, bubble1.y, bubble.d, bubble1.d);

    bubble.x += random(-2,2);
    bubble.y += random(-2,2);

  if (bubble1.x + bubble.d /2 >= width || bubble1.x - bubble1.d/2 <= 0) {
    bubble1.c = color('blue');
  }
  else if (bubble1.y + bubble.d/2 >= height || bubble1.y - bubble1.d/2 <= 0) {
    bubble1.c = color('red');
  }
}