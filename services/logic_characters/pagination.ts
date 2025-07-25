export function buildPageArray(current: number, last: number, delta = 2): number[] {
  const range: number[] = [];
  const left = Math.max(1, current - delta);
  const right = Math.min(last, current + delta);

  if (left > 1) range.push(1);
  for (let i = left; i <= right; i++) range.push(i);
  if (right < last) range.push(last);

  return range;
}
