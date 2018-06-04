let bubbles = [];
let x = 2;
function setup(){
   createCanvas(1400, 600);
   for (let i = 0; i < 100; i++){
     bubbles[i] = {
       x: random(40, width - 40),
       y: random(40, height -40),

    }

   }
}
function draw(){
  background(0);
  for (let i = 0; i < bubbles.length; i++){
      fill('red');
      ellipse(bubbles[i].x, bubbles[i].y, 40, 40);
      bubbles[i].x += random(-x, x);
      bubbles[i].y += random(-x, x);
      if (mouseX >= bubbles[i].x - 10 && mouseY >= bubbles[i].y - 10 && mouseX <= bubbles[i].x + 10 && mouseY <= bubbles[i].y + 10){
          bubbles.splice(i, 1);
          x += .1
      }
  }
}