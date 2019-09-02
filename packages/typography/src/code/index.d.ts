import { Component, PropsWithRef } from 'react';
import 'prismjs';
interface CodeProps {
  children: string;
  variants: {
    type?: 'inline' | 'block';
    language: string;
  };
  preProps?: PropsWithRef<JSX.IntrinsicElements['pre']>;
  codeProps?: PropsWithRef<JSX.IntrinsicElements['code']>;
}
export declare class Code extends Component<CodeProps, {}> {
  componentDidMount(): void;
  componentDidUpdate(): void;
  render(): JSX.Element;
}
export default Code;
