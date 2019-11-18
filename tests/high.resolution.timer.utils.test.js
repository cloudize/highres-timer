const highResTimer = require("../index"),
    allowedVariationMS = 2;

describe("The High Resolution Timer Utils", () => {
    describe("startTime() method", () => {
        it("should return an array with two numbers", () => {
            const startTime = highResTimer.startTime();
            expect(Array.isArray(startTime)).toBe(true);
            expect(startTime.length).toBe(2);
            expect(startTime[0]).not.toBeNaN();
            expect(startTime[1]).not.toBeNaN();
        });
    });

    describe("calculateDurationMS() method", () => {
        it("should return an value when called with a valid start time", () => {
            const startTime = highResTimer.startTime();
            const duration = highResTimer.calculateDurationMS(startTime);
            expect(duration).not.toBeNaN();
            expect(duration).toBeGreaterThan(0);
            expect(duration).toBeLessThan(allowedVariationMS);
        });

        it("should return an value when called with a valid start time", () => {
            const startTime = highResTimer.startTime();
            startTime[0] -= 1;
            const duration = highResTimer.calculateDurationMS(startTime);
            expect(duration).not.toBeNaN();
            expect(duration).toBeGreaterThan(1000);
            expect(duration).toBeLessThan(1000 + allowedVariationMS);
        });
    });
});