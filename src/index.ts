export { HighresTimeType } from './highres.timer';
import highresTimer, { HighresTimeType } from './highres.timer';

export function startTime(): HighresTimeType {
  return highresTimer();
}

export function elapsedTime(startTime: HighresTimeType): number {
  const nanoSecondsPerSecond = 1000 * 1000 * 1000,
    milliSecondsPerSecond = 1000 * 1000;
  const duration = highresTimer(startTime);
  return ((duration[0] * nanoSecondsPerSecond) + duration[1]) / milliSecondsPerSecond;
}
