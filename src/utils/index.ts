import { FormEvent } from 'react';

type SetInputStateParams = {
  state: { [key: string]: any };
  setState: (state: { [key: string]: any }) => void;
};

type SetInputStateInputValue = { [key: string]: any };

export let setInputState = ({ state, setState }: SetInputStateParams) => (
  value: SetInputStateInputValue
): void => {
  setState({ ...state, ...value });
};

export let onEvent = (fn: Function) => (
  event: FormEvent<HTMLInputElement | HTMLFormElement>
) => {
  event.preventDefault();

  fn();
};
