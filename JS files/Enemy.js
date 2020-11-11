function spawnEnemies(){
    if(frameCount%120 === 0){
        var enemy = createSprite(1350, random(40, 150), 20, 20);
        enemy.addImage(enemyImg);
        enemy.scale = 0.6;
        //enemy.shapeColor = "lightGrey";
        enemy.velocityX = -6;
        enemy.lifetime = 200;
    }
  }