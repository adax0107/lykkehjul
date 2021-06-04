let farve = 0
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    farve = randint(1, 8)
    pins.digitalWritePin(DigitalPin.P0, 0)
    if (farve == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (farve == 2) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (farve == 3) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (farve == 4) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (farve == 5) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (farve == 6) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (farve == 7) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
