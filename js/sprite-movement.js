
function doSpriteMovement() {
// Move left
  if (keyDown(LEFT_ARROW)) {
    monkey.x -= 5;
  }

  // Move right
  if (keyDown(RIGHT_ARROW)) {
    monkey.x += 5;
  }

  // Move up
  if (keyDown(UP_ARROW)) {
    monkey.y -= 5;
  }

  drawSprites();
}


