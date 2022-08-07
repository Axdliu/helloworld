input.onButtonPressed(Button.A, function () {
    counter += 1
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
    counter += -1
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    basic.showNumber(counter)
})
let counter = 0
basic.showString("Counter")
counter = 0
basic.showNumber(counter)
basic.forever(function () {
	
})
