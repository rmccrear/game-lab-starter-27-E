
function doSpriteMovement() {
// Move left
   if (keyDown("LEFT_ARROW")) {
    monkey.velocityX = -5;
    
  }
  // Move right
if (keyDown("RIGHT_ARROW")) {
    monkey.velocityX = 5;
    
  }

  // Move up
  if (keyDown(UP_ARROW)) {
    
    monkey.velocityY = -5;
  
  }
monkey.velocityY = monkey.velocityY + 0.25;
  drawSprites();
}


