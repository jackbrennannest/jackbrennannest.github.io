let bubble;
let brick;
let platform;
var bubble1X, bubble1Y;
var bubble2X, bubble2Y;
var motionx = 3;
var motiony = 3;
var o;
let u = true;
let lives = 3;
function bump()
  {
    motionx = motionx * -1;
    motiony = motiony * -1;
  }
function setup(){
    createCanvas(800, 900);
    platform = createSprite(100, 100, 40, 40)
    brick = new group();
    for (let i = 0;i < 10;i++){
        let b = createSprite(
            (800 - (i * 85)), (70),
            (85), (30))
            b.shapeColor(255);
            brick.add(b)

    }
    for (let i = 10;i < 19;i++)
    {
        let b = createSprite(
            (800 - ((i - 10) * 85)), (70),
            (85), (30))
            b.shapeColor(255);
            brick.add(b)
    }
    for (let i = 19;i < 28;i++)
    {
        let b = createSprite(
            (800 - ((i - 19) * 85)), (70),
            (85), (30))
            b.shapeColor(255);
            brick.add(b)

    }
    bubble1X = random(0, width);
  bubble1Y = random(200, 700);
}
    function draw(){
        background(0)

    document.getElementById("lives").innerHTML = lives;
        for (let i = brick.length - 1;i >= 0;i--){
            fill(brick[i].c)
            rect(brick[i].x, brick[i].y, 80, 30);
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
  for (let i = 0; i <= brick.length - 1; i++)
    {
        // o = int(dist(bubble1X, bubble1Y, brick[i].x + 40, brick[i].y + 15));
        if(bubble1Y + 25 <= brick[i].y + 6 && bubble1Y + 25 >= brick[i].y - 2 && bubble1X <= brick[i].x + 80 && bubble1X >= brick[i].x){
           motiony *= -1;
          brick[i].c += -50
          if (brick[i].c == 105){
              brick.splice(i, 1)
          }
        }
        else if(bubble1Y - 25 >= brick[i].y + 25 && bubble1Y - 25 <= brick[i].y + 32 && bubble1X <= brick[i].x + 80 && bubble1X >= brick[i].x)
        {
         motiony *= -1;
          brick[i].c += -50
          if (brick[i].c == 105){
              brick.splice(i, 1)
          }
        }
        else if(bubble1X + 25 >= brick[i].x - 2 && bubble1X + 25 <= brick[i].x + 5 && bubble1Y >= brick[i].y - 5 && bubble1Y <= brick[i].y + 33)
        {
          motionx *= -1;
          brick[i].c += -50
          if (brick[i].c == 105){
              brick.splice(i, 1)
          }
        }
        else if(bubble1X - 25  <= brick[i].x + 81 && bubble1X - 25 >= brick[i].x + 75 && bubble1Y >= brick[i].y - 5 && bubble1Y <= brick[i].y + 33)
        {
          motionx *= -1;
          brick[i].c += -50
          if (brick[i].c == 105){
              brick.splice(i, 1)
          }
        }
          else if (bubble1X <= brick[i].x + 36 && bubble1X >= brick[i].x + 44 && bubble1Y >= brick[i].y + 11 && bubble1Y <= brick[i].y + 17)
        {
          motionx *= -1;
          brick[i].c += -50
          if (brick[i].c == 105){
              brick.splice(i, 1)
          }
        }



       /*  if (o < 28)
        {
            brick[i].h += -1
            brick[i].c += -50
            motiony *= -1;
            if(brick[i].h == 0){
                brick.splice(i, 1)

            }*/




  if (lives <= 0)
  {
    document.getElementById("lives").innerHTML = "Game Over";
    motionx = 0
    motiony = 0
  }

}
// TODO Implement power ups/ power downs

