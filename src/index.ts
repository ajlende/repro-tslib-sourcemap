import merge from './spread';

export default function useTsLib(a: number, b: number[]) {
  // Uses the __spreadArrays function from tslib
  return merge([a, ...b], [...b, a]);
}
