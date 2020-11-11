function createBomb(){
    var BOMB = createSprite(100, 20, 20, 20);
    BOMB.addImage(bombImg);
    BOMB.velocityY = 8;
    BOMB.scale = 0.2;
    BOMB.lifetime = 200;
    BOMB.y = fighterPlane.y;
}