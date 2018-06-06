// if (document.getElementByClassName("button").addEventListener("click")){
var circle;
let q = 0;
let level = 1;
let b;
let z = 0;
let i;
let a = 10;
let c = 20;
let d = 30;
let e = 83;
let f = 30;
let g = 845;
let j = 845;
let k = 845;
let l = 5
let h = 255;
let x = [];
let lives = 6;
let chance = -1;
let thiccTrack = false
function brickfill(){

    for (i = 0;i < a;i++){
         b = createSprite(
            (g - (i * (e + l))), (70 + 5 *(i % 2)),
            (e), (f))
            b.shapeColor = color(255);
            brick.add(b)
    }
    for (i = a;i < c;i++)
    {
         b = createSprite(
            (j - ((i - 10) * (e + l))), (110 + 5 *(i % 2)),
            (e), (f))
            b.shapeColor = color(255);
            brick.add(b)
    }
    for (i = c;i < d;i++)
    {
         b = createSprite(
            (k - ((i - 20) * (e + l))), (150 + 5 *(i % 2)),
            (e), (f))
            b.shapeColor = color(255);
            brick.add(b)
    }
}
function setup(){
    createCanvas(900, 900);
    for (i = 0;i < 30;i++){
        x[i] = 255;
    }
    platform = createSprite(800, 600, 80, 20)
    platform.shapeColor = color(h);
    brick = new Group();
    brickfill();
    power = new Group();
    for (i = 0;i < 15;i++){
        p = createSprite((-40 - (i * 80)), (200),
        (40), (40))
        power.add(p);
    }
    circle = createSprite(450, 400, 25, 25)
    thicc = createSprite(1060, 570, 150, 25)
    thicc.shapeColor = color(255)
    circle.shapeColor = color(255);
    circle.velocity.x = 5;
    circle.velocity.y = 7;

document.getElementById("lives").innerHTML = lives;
}
function bumpy()
{
circle.velocity.y *= -1;
if (chance != 2)
circle.velocity.x *= (Math.random() / 4) + .87;
else
circle.velocity.x *= -1

}
function bumpx()
{
    if (circle.velocity.x < 0){
        circle.velocity.x = random(3, 5);
    }
    else{
        circle.velocity.x = random(-3, -5);
    }
}

function xf(){
    if (circle.position.x + 25 < brick[i].position.x || circle.position.x > brick[i].position.x + 83 )
    {
    circle.velocity.x *= -1
    }
    else
    {
    circle.velocity.y *= -1;
    }
    x[i] += -50;
    if (x[i] == 205){
        brick[i].shapeColor = color(205)
    }
    else if (x[i] == 155){
        brick[i].shapeColor = color(155)
    }
    else if (x[i] == 105){
        brick[i].shapeColor = color(105)
    }
    else if (x[i] == 55){
        x.splice(i, 1);
        brick[i].remove();
    }

}
function powerup()
    {
        chance = Math.floor(Math.random() * 3)
        if (chance == 0){
            lives += 1
            document.getElementById("lives").innerHTML = lives;
            document.getElementById("stronk").innerHTML =  " 1 Up"
        }
        else if (chance == 1){
            document.getElementById("stronk").innerHTML = " THICC"
            thiccTrack = true
        }
        else if (chance == 2){
            document.getElementById("stronk").innerHTML =  " Zoom"
            circle.velocity.x *= 3;
            circle.velocity.y *= 3;
        }
     /*   if (z % 5 == 0 && z % 3 != 0){
            power[power.length - 1].position.x = 9001
                if (chance == 2){
                    circle.velocity.x = 5;
                    circle.velocity.y = 5;
                }
                else if (chance == 1){
                    thiccTrack = false
                }
                        }
        switch (chance)
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
    circle.collide(thicc, bumpy)
    document.getElementById("levels").innerHTML = level;
    if (brick.length == 0){
        level += 1
        document.getElementById("levels").innerHTML = level;
    }
    if (level == 2 && brick.length == 0){
        circle.remove()
        platform.remove()
        a = 10;
        c = 20;
        d = 30;
        e = 83;
        f = 30;
        h = 255;
        thicctrack = false;
        setup();
    }
    else if (level == 3 && brick.length == 0){
        circle.remove()
        platform.remove()
        a = 10;
        c = 18;
        j = 679;
        d = 24;
        k = 513;
        e = 83;
        f = 30;
        h = 255;
        thicctrack = false;
        setup();
    }
    else if (level == 4 && brick.length == 0){
        circle.remove()
        platform.remove()
        a = 10;
        c = 18;
        j = 762;
        d = 24;
        k = 513;
        e = 83;
        f = 30;
        h = 255;
        thicctrack = false;
        setup();
    }
    else if (level == 5)
    {
        document.getElementById("game").innerHTML = "You Win!!!!!!!!!!"

    }
    if (circle.position.y >= height) {
    circle.velocity.y *= -1;
    circle.position.y = height;
    lives += -1;
    document.getElementById("lives").innerHTML = lives;
  }
  if (circle.position.x >= width) {
    circle.velocity.x *= -1
    circle.position.x = width;
  }
  if (circle.position.y <= 0) {
    circle.velocity.y *= -1;
    circle.position.y = 0;
  }
  if (circle.position.x <= 0) {
    circle.velocity.x *= -1
    circle.position.x = 0;
  }
if (thiccTrack == true)
{

    thicc.position.x = mouseX
}
else
{
    thicc.position.x = -200
}

    drawSprites();

    if (lives == 0)
    {
        document.getElementById("game").innerHTML = "Game Over"
        circle.velocity.x = 0
        circle.velocity.y = 0
    }
   /* if (power == true)
    {
    setTimeout(powerup(), 10000)
    power = false
    }*/
q++
if ( q %  900 == 0)
{
    powerup()
}

else if ((q - 500) % 900 == 0)
{
    if (chance == 2)
    {
    circle.velocity.x *= (1/3)
    circle.velocity.y *= (1/3)
    chance = 80085
    }
    else if (chance == 1)
    {
    thiccTrack = false
    thicc.position.x = -200
    }
}



}
