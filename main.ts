input.onButtonPressed(Button.A, function () {
    if (current_number < 9) {
        current_number += 1
    } else {
        current_number = 0
    }
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
    basic.showNumber(current_number)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    guess = "" + guess + current_number
    if (!(guess.length < 4)) {
        if (guess == pincode) {
            music.play(music.stringPlayable("F E G F B A C5 C5 ", 350), music.PlaybackMode.InBackground)
            radio.sendString("TURN_ON/OFF")
            basic.showIcon(IconNames.Yes)
        } else {
            for (let index = 0; index < 4; index++) {
                music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                basic.showIcon(IconNames.No)
                basic.clearScreen()
                basic.pause(200)
            }
        }
        current_number = 0
        guess = ""
        basic.pause(500)
    }
    basic.showNumber(current_number)
})
let current_number = 0
let guess = ""
let pincode = ""
radio.setGroup(65)
pincode = "1111"
guess = ""
current_number = 0
basic.showNumber(current_number)
