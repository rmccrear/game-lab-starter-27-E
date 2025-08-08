
function doSpriteMovement() {
    // Example Code follows.
    // Please delete and replace with your own code.
   if (monkeyAnimation.y >= 320) 
    monkeyAnimation.velocityY = 0;
}
if (keyDown("UP_ARROW")) {
    monkeyAnimation.velocityY = -5;
  }

 if ((monkeyAnimation.y) <= 150) {
    monkeyAnimation.velocityY = monkeyAnimation.velocityY + 0.25;
  }

