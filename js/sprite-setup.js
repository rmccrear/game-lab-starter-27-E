
function setupSprites() {
  // Example Code follows.
  // Please delete and replace with your own code.
  monkey = createSprite(200, 200, 50, 50);
  monkey.addAnimation( "monkey", monkeyAnimation);
  monkey.height = 50;
  monkey.width = 50;

  banana = createSprite(100, 100, 50, 50);
  banana .addAnimation("banana", bananaAnimation);
  // banana.velocityY = 5;
  // banana.height = 30;
  // banana.width = 30;
  log1 = createSprite (150, 200, 50, 50)
  log1.addAnimation ("log1",log1Animation);
  log2 = createSprite(320, 320, 35, 35);
  log2.addAnimation ("log2",log2Animation)
  drawSprites
  
}