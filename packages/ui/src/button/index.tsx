import React, { FC, ReactNode, PropsWithRef } from 'react';
import { joinStyles } from '@react-design-system/utils';

interface ButtonProps {
  children: ReactNode;
  variants?: {
    style?: 'solid' | 'outlined' | 'text';
    type?: 'primary' | 'secondary' | 'destructive';
  };
}

export let Button: FC<
  ButtonProps & PropsWithRef<JSX.IntrinsicElements['button']>
> = ({
  children,
  variants: { style: styleVariant = 'solid', type: typeVariant = 'primary' } = {
    style: 'solid',
    type: 'primary',
  },
  ...props
}) => {
  return (
    <button
      {...props}
      className={joinStyles(
        `rds-Button__button--${styleVariant}-${typeVariant}`,
        props.className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
