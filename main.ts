let Decine = 0
input.onButtonPressed(Button.A, function () {
    Decine = randint(1, 3)
    if (Decine == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (Decine == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            # # # # #
            # . # . #
            # # # # #
            `)
    }
    basic.pause(1000)
    basic.clearScreen()
})
