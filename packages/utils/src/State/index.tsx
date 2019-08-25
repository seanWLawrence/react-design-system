import { FC, useState } from 'react';

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
