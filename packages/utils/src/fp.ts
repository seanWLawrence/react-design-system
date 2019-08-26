/**
 * Returns true if both params are equal, including functions,
 * nested objects and arrays.
 * @param val
 * @param val2
 */
export let isEqual = (val: any, val2: any): boolean => {
  if ([val, val2].some(v => typeof v === 'object')) {
    return JSON.stringify(val) === JSON.stringify(val2);
  } else if ([val, val2].every(v => typeof v === 'function')) {
    return val.toString() === val2.toString();
  }

  return val === val2;
};

/**
 * Always returns an array, no matter what is passed in.
 * Returns the input untouched if an array is passed.
 * @param value
 */
export let safeArray = (value: any): any[] => {
  if (!value || !Array.isArray(value)) {
    return [];
  }

  return value;
};
