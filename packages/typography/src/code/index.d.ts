import { Component, PropsWithRef } from 'react';
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
    render(): JSX.Element;
}
export default Code;
