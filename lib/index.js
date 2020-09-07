"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.elapsedTime = exports.startTime = void 0;
var highres_timer_1 = __importDefault(require("./highres.timer"));
function startTime() {
    return highres_timer_1.default();
}
exports.startTime = startTime;
function elapsedTime(startTime) {
    var nanoSecondsPerSecond = 1000 * 1000 * 1000, milliSecondsPerSecond = 1000 * 1000;
    var duration = highres_timer_1.default(startTime);
    return ((duration[0] * nanoSecondsPerSecond) + duration[1]) / milliSecondsPerSecond;
}
exports.elapsedTime = elapsedTime;
