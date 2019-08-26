import React, { FC, ReactNode, PropsWithRef } from 'react';
import { joinStyles } from '@react-design-system/utils';

interface ButtonProps {
  children: ReactNode;
  variants?: {
    style?: 'solid' | 'outlined' | 'text';
    shape?: 'squared' | 'rounded';
    type?: 'primary' | 'secondary' | 'destructive';
  };
}

let Button: FC<ButtonProps & PropsWithRef<JSX.IntrinsicElements['button']>> = ({
  children,
  variants: {
    style: styleVariant = 'solid',
    shape: shapeVariant = 'squared',
    type: typeVariant = 'primary',
  } = {
    style: 'solid',
    shape: 'squared',
    type: 'primary',
  },
  ...props
}) => {
  return (
    <button
      {...props}
      className={joinStyles(
        'rds-Button__button--base',
        `rds-Button__button--${styleVariant}-${typeVariant}-${shapeVariant}`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
