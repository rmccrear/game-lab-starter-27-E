
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
}