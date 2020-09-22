import { startTime, elapsedTime, HighresTimeType } from '../../../lib';

const allowedVariationMS = 2;

describe("The High Resolution Timer Utils", () => {
    describe("startTime() method", () => {
        it("should return an array with two numbers", () => {
            const _startTime: HighresTimeType = startTime();
            expect(Array.isArray(_startTime)).toBe(true);
            expect(_startTime.length).toBe(2);
            expect(_startTime[0]).not.toBeNaN();
            expect(_startTime[1]).not.toBeNaN();
        });
    });

    describe("elapsedTime() method", () => {
        it("should return an value when called with a valid start time", () => {
            const _startTime: HighresTimeType = startTime();
            const _duration = elapsedTime(_startTime);
            expect(_duration).not.toBeNaN();
            expect(_duration).toBeGreaterThan(0);
            expect(_duration).toBeLessThan(allowedVariationMS);
        });

        it("should return an value when called with a valid start time", () => {
            const _startTime: HighresTimeType = startTime();
            _startTime[0] -= 1;
            const _duration = elapsedTime(_startTime);
            expect(_duration).not.toBeNaN();
            expect(_duration).toBeGreaterThan(1000);
            expect(_duration).toBeLessThan(1000 + allowedVariationMS);
        });
    });
});
