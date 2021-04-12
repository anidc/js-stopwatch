function Stopwatch() {

    var startTime, stopTime, duration = 0;
    var running = false

    this.start = function () {
        if (running) {
            throw Error("Stoperica je vec pokrenuta")
        }
        running = true
        startTime = new Date()

    }
    this.stop = function () {
        if (!running) {
            throw Error("Stoperica je vec zasutavljena")
        }
        running = false
        stopTime = new Date()
    }
    this.getDuration = function () {
        duration = ((stopTime.getTime() - startTime.getTime()) / 1000).toFixed(1)
        console.log(duration);
    }
    this.restart = function () {
        startTime, stopTime, duration = 0;
        running = false
    }
}
var interval;
var tens = 0
var seconds = 0
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
startTimer = () => {
    tens++;
    if (tens < 9) {
        appendTens.innerHTML = "0" + tens
    }
    if (tens > 9) {
        appendTens.innerHTML = tens
    }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0
        appendTens.innerHTML = "0" + 0
    }
    if (seconds <= 9) {
        appendSeconds.innerHTML = seconds
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds
    }
}

stopTimer = () => {
    clearInterval(interval)
}

startF = () => {
    stopwatch.start()
    interval = setInterval(startTimer, 10)

}
stopF = () => {
    stopwatch.stop()
    clearInterval(interval)
}
getTimeF = () => {
    stopwatch.getDuration()
}

restartF = () => {
    stopwatch.restart()
    clearInterval(interval)
    tens = "00"
    seconds = "0"
    appendSeconds.innerHTML = seconds
    appendTens.innerHTML = tens
}