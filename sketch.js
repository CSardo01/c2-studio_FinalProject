function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  background("#ff6e69")
  noStroke()
  fill(255);
  ellipse(252, 144, 72, 72);
  fill(255);
  ellipse(252, 144, 72, 72);
  fill(255);
  ellipse(404, 144, 72, 72);
  fill(255);
  triangle(120 + 250, 18 + 20, 18 + 250, 360 + 30, 81 + 250, 360 + 20);

}

function mouseClicked() {
  console.log("click")
  fill("#001433");
  ellipse(252, 144, 72, 72);
  fill("#ffffff");
  ellipse(260, 150, 36, 36);

  fill("#001433");
  ellipse(404, 144, 72, 72);
  fill("#ffffff");
  ellipse(414, 132, 36, 36);

  return false;
}

function draw() {
  if (mouseIsPressed === true) {

    let d1 = random(0, 72)
    let d2 = random(0, 72)
    fill("#ffffff")
    strokeWeight(4)
    stroke("#001433")
    ellipse(mouseX, mouseY, d1, d2);
  }
}