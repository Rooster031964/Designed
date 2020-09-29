for (let index = 0; index < 41000000; index++) {
    basic.setLedColor(0xff0000)
    basic.pause(100)
    basic.setLedColor(0xff8000)
    basic.pause(100)
    basic.setLedColor(0xffff00)
    basic.pause(100)
    basic.setLedColor(0xff9da5)
    basic.pause(100)
    basic.setLedColor(0x00ff00)
    basic.pause(100)
    basic.setLedColor(0xb09eff)
    basic.pause(100)
    basic.setLedColor(0x00ffff)
    basic.pause(100)
}
basic.forever(function () {
    for (let index = 0; index < 44444444444; index++) {
        basic.showLeds(`
            # # . . .
            # . . . .
            . . . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # . .
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # .
            # # # . .
            # # . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # .
            # # # . .
            # # . . .
            # . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # .
            # # # . .
            # # . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            # # # . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . # #
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . # #
            # . . . #
            . . . . .
            # . . . .
            # # . . .
            `)
        basic.showLeds(`
            # # . # #
            # . . . #
            . . . . .
            # . . . #
            # # . # #
            `)
        basic.showLeds(`
            # # . # #
            # . . . #
            . . # . .
            # . . . #
            # # . # #
            `)
        basic.showLeds(`
            # # . # #
            # . # . #
            . # # # .
            # . # . #
            # # . # #
            `)
        basic.showLeds(`
            # # . # #
            # . . . #
            . . # . .
            # . . . #
            # # . # #
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . # . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . # # # .
            . # . # .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
    }
})
