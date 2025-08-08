
function doSpriteMovement () {
  log1.velocityX = 5;
 if ((log1.x) >= 400) {
    log1.x = 0;
    log1.y = randomNumber(10, 400);
  }
log2.velocityY = 5;
  if ((log2.y) >= 400) {
    log2.y = 0;
    log2.x = randomNumber(10, 400);
  }
banana.velocityY = 5;
if (banana.y< 5 || banana.y>400) {
    banana.x = randomNumber(25, 375);
    banana.y = 0;
}
  }
