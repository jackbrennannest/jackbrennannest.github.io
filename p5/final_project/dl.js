function setup(){
    createCanvas(900, 900);
    p1 = createSprite(20, 20, 20, 100)
    p1.shapeColor = color(255);
    p2 = createSprite(880, 20, 20, 100)
    p2.shapeColor = color(255)
    ball = createSprite(450, 450, 10, 10)
    ball.shapeColor = color(255)
    ball.velocity.y = -3
    ball.velocity.x = -3
}
function bumpy()
{
    circle.velocity.y *= -1;
}
function bumpx()
{
    circle.velocity.x *= -1;
}
function draw(){
    background(0);
    p1.position.y = mousey;
    p2.position.y = mousey;
    ball.collide(p2, bumpx)
    ball.collide(p1, bumpx)
    if (ball.position.y >= height) {
    ball.velocity.y *= -1;
    // set to height to prevent "tunneling"
    ball.position.y = height;
  }
  if (ball.position.x >= width) {
    ball.velocity.x *= -1;
    // set to height to prevent "tunneling"
    ball.position.x = width;
  }
  if (ball.position.y <= 0) {
    ball.velocity.y *= -1;
    // set to height to prevent "tunneling"
    ball.position.y = 0;
  }
  if (ball.position.x <= 0) {
    ball.velocity.x *= -1;
    // set to height to prevent "tunneling"
    ball.position.x = 0;
  }
  drawSprites();
}