input.onSound(DetectedSound.Loud, function () {
    lightson = !(lightson)
    if (lightson) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let lightson = false
input.setSoundThreshold(SoundThreshold.Loud, 150)
basic.forever(function () {
	
})
