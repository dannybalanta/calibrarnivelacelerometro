basic.forever(function () {
    if (input.acceleration(Dimension.X) >= -5 && input.acceleration(Dimension.X) <= 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(500)
        basic.showString("OK")
        basic.clearScreen()
        basic.pause(500)
    } else if (input.acceleration(Dimension.X) > 5) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    } else if (input.acceleration(Dimension.X) < -5) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
    } else {
    	
    }
})
