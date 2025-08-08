
function doSpriteInteraction() {
    // Example Code follows.
    // Please delete and replace with your own code.
    if (monkey.isTouching(banana)){
    banana.x=randomNumber(0,400);
    banana.y=randomNumber(0,400);}
   
     if (monkey.isTouching(log1)) {
    log1.displace(monkey);}

     if (monkey.isTouching(log2)) {
    log2.displace(monkey);
    
  }
    
  
}