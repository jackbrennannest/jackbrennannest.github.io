// if (document.getElementByClassName("button").addEventListener("click")){
var circle;
let b;
let i;
let x = [];
let lives = 3;
let power = true;
let chance;
function setup(){
    createCanvas(900, 900);
    for (i = 0;i < 30;i++){
        x[i] = 255;
    }
    platform = createSprite(450, 600, 80, 20)
    platform.shapeColor = color(255);
    brick = new Group();
    circle = createSprite(450, 400, 25, 25)
    circle.shapeColor = color(255);
    circle.velocity.x = 3;
    circle.velocity.y = 3;
    for (i = 0;i < 10;i++){
         b = createSprite(
            (830 - (i * 88)), (70),
            (83), (30))
            b.shapeColor = color(255);
            brick.add(b)
    }
    for (i = 10;i < 20;i++)
    {
         b = createSprite(
            (830 - ((i - 10) * 88)), (110),
            (83), (30))
            b.shapeColor = color(255);
            brick.add(b)
    }
    for (i = 20;i < 30;i++)
    {
         b = createSprite(
            (830 - ((i - 20) * 88)), (150),
            (83), (30))
            b.shapeColor = color(255);
            brick.add(b)
    }

}
function bumpy()
{
    circle.velocity.y *= -1;
}
function bumpx()
{
    circle.velocity.x *= -1;
}
function boom()
{
    brick[i].remove();
    circle.velocity.y *= -1
}
function xf(){
    x[i] += -50;
    if (x == 205){
        brick[i].shapeColor = color(205)
        circle.velocity.y *= -1
    }
    else if (x[i] == 155){
        brick[i].shapeColor = color(155)
        circle.velocity.y *= -1
    }
    else if (x[i] == 105){
        brick[i].shapeColor = color(105)
        circle.velocity.y *= -1
    }
    else if (x[i] == 55){
        x.splice(i, 1);
        boom()
    }
}
function powerup()
{
    power = true
        chance = Math.floor(Math.random() * 3)
        if (chance == 0){
            lives += 1
            document.getElementById("lives").innerHTML +=  "1 Up"
        }
        else if (chance == 1){
            document.getElementById("lives").innerHTML += "THICC"
            circle = createSprite(450, 400, 35, 35)
            platform = createSprite(450, 600, 100, 25)
        }
        else if (chance == 2){
            document.getElementById("lives").innerHTML += "Zoom"
            circle.velocity.x *= 3;
            circle.velocity.y *= 3;
        }
        /*switch (chance)
        {
            case 0 :
                lives += 1
                document.getElementById("lives").innerHTML +=  "1 Up"
            break;
            case 1 :
                document.getElementById("lives").innerHTML += "THICC"
            circle = createSprite(450, 400, 35, 35)
            platform = createSprite(450, 600, 100, 25)
            break;
            case 2 :
                document.getElementById("lives").innerHTML += "Zoom"
                circle.velocity.x *= 3;
                circle.velocity.y *= 3;

            break;
        }*/

}
function draw(){
    background(0);
    platform.position.x = mouseX;
    for (i = 0;i < brick.length;i++){
        circle.collide(brick[i], xf)
    }
    circle.collide(platform, bumpy)
    if (circle.position.y >= height) {
    circle.velocity.y *= -1;
    circle.position.y = height;
    lives += -1;
  }
  if (circle.position.x >= width) {
    circle.velocity.x *= -1;
    circle.position.x = width;
  }
  if (circle.position.y <= 0) {
    circle.velocity.y *= -1;
    circle.position.y = 0;
  }
  if (circle.position.x <= 0) {
    circle.velocity.x *= -1;
    circle.position.x = 0;
  }
    drawSprites();
    document.getElementById("lives").innerHTML = lives;
    if (power == true)
    {
    setTimeout(powerup(), 10000)
    power = false
    }
}