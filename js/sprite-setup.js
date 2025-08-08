
function setupSprites() {
  // Example Code follows.
  // Please delete and replace with your own code.
  monkey = createSprite(200, 200, 50, 50);
  monkey.addAnimation( "monkey", monkeyAnimation);
  monkey.height = 50;
  monkey.width = 50;

  star = createSprite(100, 100, 50, 50);
  star.shapeColor = "aqua";
  // star.addAnimation('twinkle', starAnimation);
  // star.velocityX = -1;
  // star.velocityY = -2;
  // star.height = 30;
  // star.width = 30;
  drawSprites
}