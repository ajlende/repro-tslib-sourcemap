export default function merge(a: number[], b: number[]) {
  // Uses the __spreadArrays function from tslib
  return [...a, ...b];
}
