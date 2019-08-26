export let joinStyles = (...classNames: Array<string | boolean>): string =>
  classNames.filter(Boolean).join(' ');

export type ThemeColor =
  | 'first'
  | 'second'
  | 'third'
  | 'fourth'
  | 'first-inverse'
  | 'second-inverse'
  | 'third-inverse'
  | 'fourth-inverse'
  | 'white'
  | 'gray-lightest'
  | 'gray-lighter'
  | 'gray-light'
  | 'gray-medium'
  | 'gray-dark'
  | 'gray-darker'
  | 'gray-darkest'
  | 'black'
  | 'error'
  | 'warning'
  | 'success'
  | string;
