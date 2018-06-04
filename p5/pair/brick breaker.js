Group(bricks);
Group(circle);
let brick = [];
let u = true;
function setup(){
    createCanvas(800, 900);
        for (let i = 0;i < 10;i++)
    {
        brick[i] = {
            x: (800 - (i * 85)),
            y: (70),
            c: (255),
            h: (3)
        }
        addToGroup(bricks);
    }
    for (let i = 10;i < 19;i++)
    {
        brick[i] = {
            x: (800 - ((i - 10) * 85)),
            y: (110),
            c: (255),
            h: (3)
        }
        addToGroup(bricks);
    }
    for (let i = 19;i < 28;i++)
    {
        brick[i] = {
            x: (800 - ((i - 19) * 85)),
            y: (150),
            c: (255),
            h: (3)
        }
        addToGroup(bricks);
    }
    bubble1X = random(0, width);
  bubble1Y = random(200, 700);
}
function draw(){
    background(0);
    if (u == true){
        fill(255);
        u = false;
    }
document.getElementById("lives").innerHTML = lives;
        for (let i = brick.length - 1;i >= 0;i--){
            rect(brick[i].x, brick[i].y, 80, 30);
            fill(brick[i].c, brick[i])
        }
        platform = rect(mouseX, 800, 60, 20);
        ellipse(bubble1X, bubble1Y, 30, 30);
        if (bubble1X > width)
  {
    motionx += -3;
  }
  else if (bubble1X < 1)
    {
      motionx += 3;
    }
  if (bubble1Y > height)
  {
    motiony *= -1;
    bubble1Y += -5;
    lives += -1;
  }
  if (bubble1Y < 1)
    {
      motiony += 3;
    }
  var d = int(dist(bubble1X , bubble1Y, mouseX, 810));

  if (bubble1Y > 790 && bubble1Y < 800)
  {
    if (d < 55)
    {
    motiony *= -1;
    bubble1Y += -5;
    }
  }
  bubble1X += motionx;
  bubble1Y += motiony;
if (lives <= 0)
  {
    document.getElementById("lives").innerHTML = "Game Over";
    motionx = 0
    motiony = 0
  }
}