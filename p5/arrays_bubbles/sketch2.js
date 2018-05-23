let bubbles = [];
// let bubblesize;
// setup your bubble objects
function setup() {
   createCanvas(800, 1500);
   for (let i = 0; i < 1000; i++) {
     bubbles[i] = {
       x: random(0, width),
       y: random(0, height),
       c: random(0, 175),
       bubblesize: random(10, 40)

     }
   }
}
function draw() {
  background(0);
  for (let j = 0; j < 1000; j++) {
      //fill(bubbles[j].c);
      fill(random(0, 175));
      ellipse(bubbles[j].x, bubbles[j].y, bubbles[j].bubblesize);
      bubbles[j].x += random(-10, 10);
      bubbles[j].y += random(-10, 10);
    //   console.log(j)
  }
}