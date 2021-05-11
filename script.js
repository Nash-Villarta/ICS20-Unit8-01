function setup() {
  createCanvas(250, 250);
}

function draw() {
  let a = color("blue");
  let b = color("red");
  background(220);
  fill(a);
  strokeWeight(1);
  rect(90, 20, 90, 90);
  strokeWeight(5);
  fill(b);
  circle(50, 160, 100);
}
