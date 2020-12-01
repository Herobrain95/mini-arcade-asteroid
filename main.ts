input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let Asteroid_3: game.LedSprite = null
let Asteroid_2: game.LedSprite = null
let Asteroid: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
for (let index = 0; index < 5; index++) {
    Asteroid = game.createSprite(randint(0, 5), 0)
    for (let index = 0; index < 5; index++) {
        if (sprite.isTouching(Asteroid)) {
            game.gameOver()
        } else {
            basic.pause(500)
            Asteroid.change(LedSpriteProperty.Y, 1)
        }
    }
    Asteroid.delete()
}
sprite.delete()
basic.clearScreen()
basic.pause(500)
basic.showString("Level 2")
sprite = game.createSprite(2, 4)
for (let index = 0; index < 5; index++) {
    Asteroid = game.createSprite(randint(0, 5), 0)
    basic.pause(800)
    Asteroid_2 = game.createSprite(randint(0, 5), 0)
    for (let index = 0; index < 5; index++) {
        if (sprite.isTouching(Asteroid)) {
            game.gameOver()
        } else {
            basic.pause(500)
            Asteroid.change(LedSpriteProperty.Y, 1)
        }
        if (sprite.isTouching(Asteroid_2)) {
            game.gameOver()
        } else {
            basic.pause(500)
            Asteroid_2.change(LedSpriteProperty.Y, 1)
        }
    }
    Asteroid.delete()
    Asteroid_2.delete()
}
sprite.delete()
basic.clearScreen()
basic.pause(500)
basic.showString("Level 3")
sprite = game.createSprite(2, 4)
for (let index = 0; index < 5; index++) {
    Asteroid = game.createSprite(randint(0, 5), 0)
    basic.pause(800)
    Asteroid_2 = game.createSprite(randint(0, 5), 0)
    basic.pause(800)
    Asteroid_3 = game.createSprite(randint(0, 5), 0)
    for (let index = 0; index < 5; index++) {
        if (sprite.isTouching(Asteroid)) {
            game.gameOver()
        } else {
            basic.pause(500)
            Asteroid.change(LedSpriteProperty.Y, 1)
        }
        if (sprite.isTouching(Asteroid_2)) {
            game.gameOver()
        } else {
            basic.pause(500)
            Asteroid_2.change(LedSpriteProperty.Y, 1)
        }
        if (sprite.isTouching(Asteroid_3)) {
            game.gameOver()
        } else {
            basic.pause(500)
            Asteroid_3.change(LedSpriteProperty.Y, 1)
        }
    }
    Asteroid.delete()
    Asteroid_2.delete()
    Asteroid_3.delete()
}
sprite.delete()
basic.clearScreen()
basic.pause(500)
basic.showString("Level 4")
sprite = game.createSprite(2, 4)
for (let index = 0; index < 5; index++) {
    Asteroid = game.createSprite(randint(0, 5), 0)
    basic.pause(800)
    Asteroid_2 = game.createSprite(randint(0, 5), 0)
    basic.pause(800)
    Asteroid_3 = game.createSprite(randint(0, 5), 0)
    for (let index = 0; index < 5; index++) {
        if (sprite.isTouching(Asteroid)) {
            game.gameOver()
        } else {
            basic.pause(randint(300, 500))
            Asteroid.change(LedSpriteProperty.Y, 1)
        }
        if (sprite.isTouching(Asteroid_2)) {
            game.gameOver()
        } else {
            basic.pause(randint(300, 500))
            Asteroid_2.change(LedSpriteProperty.Y, 1)
        }
        if (sprite.isTouching(Asteroid_3)) {
            game.gameOver()
        } else {
            basic.pause(randint(300, 500))
            Asteroid_3.change(LedSpriteProperty.Y, 1)
        }
    }
    Asteroid.delete()
    Asteroid_2.delete()
    Asteroid_3.delete()
}
sprite.delete()
basic.clearScreen()
basic.pause(500)
basic.showString("Level 5")
sprite = game.createSprite(2, 4)
for (let index = 0; index < 5; index++) {
    Asteroid = game.createSprite(randint(0, 5), 0)
    basic.pause(800)
    Asteroid_2 = game.createSprite(randint(0, 5), 0)
    basic.pause(800)
    Asteroid_3 = game.createSprite(randint(0, 5), 0)
    for (let index = 0; index < 5; index++) {
        if (sprite.isTouching(Asteroid)) {
            game.gameOver()
        } else {
            basic.pause(randint(200, 400))
            Asteroid.change(LedSpriteProperty.Y, 1)
        }
        if (sprite.isTouching(Asteroid_2)) {
            game.gameOver()
        } else {
            basic.pause(randint(200, 400))
            Asteroid_2.change(LedSpriteProperty.Y, 1)
        }
        if (sprite.isTouching(Asteroid_3)) {
            game.gameOver()
        } else {
            basic.pause(randint(200, 400))
            Asteroid_3.change(LedSpriteProperty.Y, 1)
        }
    }
    Asteroid.delete()
    Asteroid_2.delete()
    Asteroid_3.delete()
}
sprite.delete()
