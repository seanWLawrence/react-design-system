import { FC, ReactNode, PropsWithRef } from 'react';
interface ButtonProps {
  children: ReactNode;
  variants?: {
    style?: 'solid' | 'outlined' | 'text';
    shape?: 'squared' | 'rounded';
    type?: 'primary' | 'secondary' | 'destructive';
  };
}
declare let Button: FC<
  ButtonProps & PropsWithRef<JSX.IntrinsicElements['button']>
>;
export default Button;
