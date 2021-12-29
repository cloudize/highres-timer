import highresTimer, { HighresTimeType } from './highres.timer';

export { HighresTimeType } from './highres.timer';

export function startTime(): HighresTimeType {
  return highresTimer();
}

// eslint-disable-next-line no-shadow
export function elapsedTime(startTime: HighresTimeType): number {
  const nanoSecondsPerSecond = 1000 * 1000 * 1000;
  const milliSecondsPerSecond = 1000 * 1000;
  const duration = highresTimer(startTime);
  return ((duration[0] * nanoSecondsPerSecond) + duration[1]) / milliSecondsPerSecond;
}
