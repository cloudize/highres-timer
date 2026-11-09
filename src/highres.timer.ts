export type HighresTimeType = [number, number];

export interface HighresTimer {
  (previousTimestamp?: HighresTimeType): HighresTimeType;
  bigint(): bigint;
}

const NS_PER_SEC = 1_000_000_000n;
const NS_PER_MS = 1_000_000n;

// Monotonic browser timestamp expressed in nanoseconds.
const browserNowNanoseconds = (): bigint => {
  if (typeof globalThis.performance?.now !== 'function') {
    throw new Error('performance.now() is unavailable');
  }

  const milliseconds = globalThis.performance.now();
  const wholeMilliseconds = Math.floor(milliseconds);

  const fractionalNanoseconds = Math.round((milliseconds - wholeMilliseconds) * 1_000_000);

  return BigInt(wholeMilliseconds) * NS_PER_MS + BigInt(fractionalNanoseconds);
};

// Browser implementation of Node's hrtime interface.
const browserHrtime: HighresTimer = Object.assign(
  (previousTimestamp?: HighresTimeType): HighresTimeType => {
    let diff = browserNowNanoseconds();

    if (previousTimestamp) {
      diff -= BigInt(previousTimestamp[0]) * NS_PER_SEC + BigInt(previousTimestamp[1]);
    }

    let seconds = diff / NS_PER_SEC;
    let nanoseconds = diff % NS_PER_SEC;

    // Normalise negative differences.
    if (nanoseconds < 0n) {
      seconds -= 1n;
      nanoseconds += NS_PER_SEC;
    }

    return [Number(seconds), Number(nanoseconds)];
  },
  {
    bigint: browserNowNanoseconds,
  },
);

// Prefer the native Node implementation when available.
// eslint-disable-next-line max-len
const highresTimer: HighresTimer = (typeof process !== 'undefined' && typeof process.hrtime?.bigint === 'function') ? process.hrtime : browserHrtime;

export default highresTimer;
