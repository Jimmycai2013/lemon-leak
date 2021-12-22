function resetCoin () {
    coin.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    coin.say("I'm over here", 500)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    resetCoin()
})
let projectile: Sprite = null
let projectile2: Sprite = null
let coin: Sprite = null
let lemon = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . . 
    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
    . . . . c c b 4 4 4 b b 4 5 4 4 
    . . . . . . c c c c c c b b 4 . 
    `, SpriteKind.Player)
lemon.setPosition(80, 60)
scene.setBackgroundColor(9)
controller.moveSprite(lemon)
lemon.setFlag(SpriteFlag.StayInScreen, true)
coin = sprites.create(assets.image`coin`, SpriteKind.Food)
info.setScore(0)
resetCoin()
game.onUpdateInterval(5000, function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`shark`, randint(50, 10), randint(10, 50))
})
game.onUpdateInterval(5000, function () {
    projectile = sprites.createProjectileFromSide(assets.image`knife`, randint(-50, -10), randint(10, 50))
})
