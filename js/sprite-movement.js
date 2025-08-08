
function doSpriteMovement() {
    // Example Code follows.
    // Please delete and replace with your own code.
   if (monkey.y >= 320) 
    monkey.velocityY = 0;
}
if (keyDown("UP_ARROW")) {
    monkey.velocityY = -5;
  }

 if ((monkey.y) <= 150) {
    monkey.velocityY = monkey.velocityY + 0.25;
  }

