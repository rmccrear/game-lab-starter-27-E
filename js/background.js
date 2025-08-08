
function drawBackground() {
    background1();
    if (score < 10) {
        background1();
    } else {
        background2();
    }
}

function background1() {
    background("forestgreen");

    // Tree trunks
    fill(104, 68, 55);
    rect(50, 0, 30, 400);
    rect(320, 0, 30, 400);

    // Leaves 
    fill("limegreen");
    ellipse(65, 50, 150, 100);
    ellipse(335, 50, 150, 100);
    ellipse(200, 0, 300, 150);

    function background2() {
  // Sky / background color
  background("forestgreen");

  // Tree trunks
  fill(104, 68, 55);
  rect(50, 0, 30, 400);
  rect(320, 0, 30, 400);

  // Big leafy canopy
  fill("limegreen");
  ellipse(200, 50, 300, 150);
  ellipse(80, 50, 150, 100);
  ellipse(320, 50, 150, 100);

  // Vines hanging down
  fill("darkgreen");
  rect(120, 0, 5, 400);
  rect(200, 0, 5, 400);
  rect(280, 0, 5, 400);

  // Cute leaves on vines
  fill("limegreen");
  ellipse(122, 100, 20, 10);
  ellipse(202, 150, 20, 10);
  ellipse(282, 200, 20, 10);
  ellipse(122, 250, 20, 10);
  ellipse(202, 300, 20, 10);
  ellipse(282, 350, 20, 10);
}
}