import { safeArray, isEqual } from './fp';

describe('Functional progreamming', () => {
  describe('safeArray', () => {
    it('always returns an array, no matter what is passed in', () => {
      // null and undefined
      expect(safeArray(null)).toEqual([]);
      expect(safeArray(void 0)).toEqual([]);

      // strings
      expect(safeArray('')).toEqual([]);
      expect(safeArray('hello, world!')).toEqual([]);

      // objects
      expect(safeArray({})).toEqual([]);
      expect(safeArray({ hello: 'world' })).toEqual([]);

      // booleans
      expect(safeArray(false)).toEqual([]);
      expect(safeArray(true)).toEqual([]);

      // arrays
      expect(safeArray([])).toEqual([]);
      expect(safeArray([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('returns the input untouched if an array is passed', () => {
      expect(safeArray([])).toEqual([]);
      expect(safeArray([1, 2, 3])).toEqual([1, 2, 3]);
      expect(safeArray([1, [2, [3]]])).toEqual([1, [2, [3]]]);
    });
  });

  describe('isEqual', () => {
    it('returns true is both params are equal', () => {
      // booleans
      expect(isEqual(true, true)).toBe(true);
      expect(isEqual(false, false)).toBe(true);

      // null and undefined
      expect(isEqual(null, null)).toBe(true);
      expect(isEqual(void 0, void 0)).toBe(true);

      // strings
      expect(isEqual('', '')).toBe(true);
      expect(isEqual('hello', 'hello')).toBe(true);

      // objects
      expect(isEqual({}, {})).toBe(true);
      expect(isEqual({ hello: 'world' }, { hello: 'world' })).toBe(true);
      expect(
        isEqual(
          { hello: { world: 'some string' } },
          { hello: { world: 'some string' } }
        )
      ).toBe(true);

      // arrays
      expect(isEqual([], [])).toBe(true);
      expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
      expect(isEqual([1, [2, [3]]], [1, [2, [3]]])).toBe(true);

      // functions
      expect(isEqual(() => {}, () => {})).toBe(true);
      expect(isEqual(async () => {}, async () => {})).toBe(true);
      expect(
        isEqual(
          function someFunction() {
            return true;
          },
          function someFunction() {
            return true;
          }
        )
      ).toBe(true);
    });
  });
});
