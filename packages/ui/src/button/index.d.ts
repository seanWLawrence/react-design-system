import { FC, ReactNode, PropsWithRef } from 'react';
interface ButtonProps {
    children: ReactNode;
    variants?: {
        style?: 'solid' | 'outlined' | 'text';
        type?: 'primary' | 'secondary' | 'destructive';
    };
}
export declare let Button: FC<ButtonProps & PropsWithRef<JSX.IntrinsicElements['button']>>;
export default Button;
