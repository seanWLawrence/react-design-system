export let joinStyles = (...classNames: string[]): string =>
  classNames.filter(Boolean).join(' ');
