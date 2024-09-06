input.onButtonPressed(Button.A, function () {
    if (Mode_AB == 1) {
        Mode_AB = 0
        if (Mode_AB_Excute == 1) {
            keyboard.sendString(convertToText(Nav_Page))
            keyboard.sendString(keyboard.keys(keyboard._Key.enter))
            Mode_AB_Excute = 0
        }
    } else {
        Mode_AB = 0
        if (Nav_StartPage < Nav_Page) {
            Nav_Page += -1
        }
        keyboard.sendString(convertToText(Nav_Page))
        keyboard.sendString(keyboard.keys(keyboard._Key.enter))
    }
    whaleysans.showNumber(Nav_Page)
})
input.onGesture(Gesture.EightG, function () {
    if (_8G_ON != 0) {
        music.play(music.createSoundExpression(WaveShape.Square, 54, 54, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        Mode_AB = 1
        // If 8G Enable. Then Open Slide Page in it
        Mode_AB_Page = _8G_Page
        keyboard.sendString(convertToText(Mode_AB_Page))
        keyboard.sendString(keyboard.keys(keyboard._Key.enter))
        basic.showIcon(IconNames.Yes)
        basic.showNumber(Mode_AB_Page)
        Mode_AB_Page = Mode_AB_StartPage
        Mode_AB_Excute = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Mode_AB == 0) {
        Mode_AB_Page = Mode_AB_StartPage
        Mode_AB = 1
        basic.showNumber(Mode_AB_Page)
    } else {
        if (Mode_AB_Page < Mode_AB_EndPage) {
            Mode_AB_Page += 1
        } else {
            Mode_AB_Page = Mode_AB_StartPage
        }
        basic.showNumber(Mode_AB_Page)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Mode_AB == 1) {
        Mode_AB = 0
        if (Mode_AB_Excute == 1) {
            keyboard.sendString(convertToText(Nav_Page))
            keyboard.sendString(keyboard.keys(keyboard._Key.enter))
            Mode_AB_Excute = 0
        }
    } else {
        Mode_AB = 0
        Nav_Page += 1
        keyboard.sendString(convertToText(Nav_Page))
        keyboard.sendString(keyboard.keys(keyboard._Key.enter))
    }
    whaleysans.showNumber(Nav_Page)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (LOGOTAP_ON != 0) {
        music.play(music.createSoundExpression(WaveShape.Square, 54, 54, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        Mode_AB = 1
        // If 8G Enable. Then Open Slide Page in it
        Mode_AB_Page = LOGOTAP_ON_PAGE
        keyboard.sendString(convertToText(Mode_AB_Page))
        keyboard.sendString(keyboard.keys(keyboard._Key.enter))
        basic.showIcon(IconNames.Yes)
        basic.showNumber(Mode_AB_Page)
        Mode_AB_Page = Mode_AB_StartPage
        Mode_AB_Excute = 1
    }
})
let Mode_AB_Count = 0
let Nav_Page = 0
let Nav_StartPage = 0
let Mode_AB_Page = 0
let Mode_AB_Excute = 0
let Mode_AB_EndPage = 0
let Mode_AB_StartPage = 0
let Mode_AB = 0
let LOGOTAP_ON_PAGE = 0
let LOGOTAP_ON = 0
let _8G_Page = 0
let _8G_ON = 0
keyboard.startKeyboardService()
led.setBrightness(14)
// IF 8G Function ON =1
_8G_ON = 0
_8G_Page = 3
// IF LOGO TAP Function ON =1
LOGOTAP_ON = 3
LOGOTAP_ON_PAGE = 3
Mode_AB = 0
// START Super Inpose
// PAGE
Mode_AB_StartPage = 1
// END Super Inpose
// PAGE
Mode_AB_EndPage = 4
Mode_AB_Excute = 0
Mode_AB_Page = Mode_AB_StartPage - 1
// Start Main Slide Page
Nav_StartPage = 5
Nav_Page = Nav_StartPage - 1
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (Mode_AB == 1) {
        if (input.buttonIsPressed(Button.AB)) {
            Mode_AB_Count += 1
            if (Mode_AB_Count > 50) {
                music.play(music.createSoundExpression(WaveShape.Square, 54, 54, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                keyboard.sendString(convertToText(Mode_AB_Page))
                keyboard.sendString(keyboard.keys(keyboard._Key.enter))
                basic.showIcon(IconNames.Yes)
                basic.showNumber(Mode_AB_Page)
                Mode_AB_Page = Mode_AB_StartPage
                Mode_AB_Count = 0
                Mode_AB_Excute = 1
            }
        }
    } else {
    	
    }
})
