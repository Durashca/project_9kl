function KeyTracker(pressureTesting) {
    this.keysPressed = [];

    this.onKeysPressed = function (event) {
        if (this.checkPressing(event))
            this.keysPressed.forEach(f => f(event));
    };

    this.checkPressing = function (event) {
        return pressureTesting(event);
    };
}
