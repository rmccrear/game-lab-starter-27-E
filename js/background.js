
function drawBackground() {
    background1();
}

function background1() {
    background("darkgreen"); // Jungle sky color
    noStroke();

    // Jungle floor
    fill("saddlebrown");
    rect(0, height - 50, width, 50); // Jungle floor

    // Simple trees (trunks and canopies)
    fill("saddlebrown");
    rect(100, height - 150, 20, 100); // Tree trunk 1
    rect(300, height - 150, 20, 100); // Tree trunk 2

    fill("forestgreen");
    ellipse(110, height - 170, 80, 80); // Tree canopy 1
    ellipse(310, height - 170, 80, 80); // Tree canopy 2
}


function background2() {

}
