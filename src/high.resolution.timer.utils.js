exports.startTime = function () {
    return process.hrtime();
};

exports.calculateDurationMS = function (startTime) {
    const nanoSecondsPerSecond = 1000 * 1000 * 1000,
        milliSecondsPerSecond = 1000 * 1000;
    const duration = process.hrtime(startTime);
    return ((duration[0] * nanoSecondsPerSecond) + duration[1]) / milliSecondsPerSecond;
};