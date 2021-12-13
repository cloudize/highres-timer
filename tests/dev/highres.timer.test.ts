import { startTime, elapsedTime, HighresTimeType } from '../../src';

const allowedVariationMS = 2;

describe('The High Resolution Timer Utils', () => {
  describe('startTime() method', () => {
    it('should return an array with two numbers', () => {
      const testStartTime: HighresTimeType = startTime();
      expect(Array.isArray(testStartTime)).toBe(true);
      expect(testStartTime.length).toBe(2);
      expect(testStartTime[0]).not.toBeNaN();
      expect(testStartTime[1]).not.toBeNaN();
    });
  });

  describe('elapsedTime() method', () => {
    it('should return an value when called with a valid start time', () => {
      const testStartTime: HighresTimeType = startTime();
      const testDuration = elapsedTime(testStartTime);
      expect(testDuration).not.toBeNaN();
      expect(testDuration).toBeGreaterThan(0);
      expect(testDuration).toBeLessThan(allowedVariationMS);
    });

    it('should return an value when called with a valid start time that has been reduced by 1 second', () => {
      const testStartTime: HighresTimeType = startTime();
      testStartTime[0] -= 1;
      const testDuration = elapsedTime(testStartTime);
      expect(testDuration).not.toBeNaN();
      expect(testDuration).toBeGreaterThan(1000);
      expect(testDuration).toBeLessThan(1000 + allowedVariationMS);
    });
  });
});
