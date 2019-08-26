import { FC, useState, createContext } from 'react';

let themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = createContext(
  themes.dark // default value
);

type StateChildren = {
  state: any;
  setState: (value: any) => void;
};

type StateProps = {
  initialState?: any;
  children: (renderProps: StateChildren) => JSX.Element;
};

let State: FC<StateProps> = ({ initialState = null, children }) => {
  let [state, setState] = useState(initialState);

  return children({ state, setState });
};

export default State;
