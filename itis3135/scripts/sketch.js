let circles = [];

function setup() {
  createCanvas(800, 500);
  background(255);
}

function draw() {
  background(255, 20);

  for (let c of circles) {
    fill(c.color);
    noStroke();
    ellipse(c.x, c.y, c.size);
    c.size *= 0.98;
  }

  circles = circles.filter(c => c.size > 1);
}

function mousePressed() {
  let newCircle = {
    x: mouseX,
    y: mouseY,
    size: random(30, 80),
    color: color(random(255), random(255), random(255), 150)
  };
  circles.push(newCircle);
}
