import React, { FC, ReactChild } from 'react';
import { joinStyles } from '@react-design-system/utils';

interface ButtonProps {
  children: ReactChild;
  classNames?: { button?: string };
  testIds?: { button?: string };
  onClick: (optionalValue: any) => void;
  type?: 'button' | 'submit';
  variants?: {
    style?: 'solid' | 'outlined' | 'text';
    shape?: 'squared' | 'rounded';
    color?: 'primary' | 'secondary' | 'error';
  };
}

let Button: FC<ButtonProps> = ({
  children,
  classNames: { button: buttonClassName = '' } = {
    button: '',
  },
  testIds: { button: buttonTestId = 'button' } = {
    button: 'button',
  },
  variants: {
    style: styleVariant = 'solid',
    shape: shapeVariant = 'squared',
    color: colorVariant = 'primary',
  } = {
    style: 'solid',
    shape: 'squared',
    color: 'primary',
  },
  onClick,
  type = 'button',
}) => {
  return (
    <button
      className={joinStyles(
        'rds-Button__button--base',
        `rds-Button__button--${styleVariant}-${colorVariant}-${shapeVariant}`,
        buttonClassName
      )}
      data-testid={buttonTestId}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
