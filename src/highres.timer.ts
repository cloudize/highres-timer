/* eslint-disable no-undef */
import { isDefined, isFalse, isUndefined } from '@apigames/json';

export type HighresTimeType = [ number, number ];

// eslint-disable-next-line no-underscore-dangle
const _perfomancePolyfill = () => {
  // based on https://gist.github.com/paulirish/5438650 copyright Paul Irish 2015
  if (isFalse('performance' in window)) {
    (window.performance as any) = {};
  }

  Date.now = (Date.now || (() => new Date().getTime()));

  if (isFalse('now' in window.performance)) {
    let nowOffset = Date.now();

    if (performance.timing && performance.timing.navigationStart) {
      nowOffset = performance.timing.navigationStart;
    }

    window.performance.now = () => Date.now() - nowOffset;
  }
};

// eslint-disable-next-line no-underscore-dangle
const _hrtime = (previousTimestamp?: HighresTimeType): HighresTimeType => {
  _perfomancePolyfill();
  const baseNow = Math.floor((Date.now() - performance.now()) * 1e-3);
  const clocktime = performance.now() * 1e-3;
  let seconds = Math.floor(clocktime) + baseNow;
  let nanoseconds = Math.floor((clocktime % 1) * 1e9);

  if (previousTimestamp) {
    seconds -= previousTimestamp[0];
    nanoseconds -= previousTimestamp[1];
    if (nanoseconds < 0) {
      // eslint-disable-next-line no-plusplus
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
};

const NS_PER_SEC: number = 1e9;

_hrtime.bigint = (time?: [number, number]): bigint => {
  const diff = _hrtime(time);
  return ((diff[0] * NS_PER_SEC + diff[1]) as unknown) as bigint;
};

if ((isUndefined(typeof process) || isUndefined(process.hrtime)) && isUndefined(window.process)) {
  window.process = ({} as any);
}

export default isDefined(process.hrtime) ? process.hrtime : (window.process.hrtime = _hrtime);
