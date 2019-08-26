import React, { FC, ReactChild } from 'react';
import { joinStyles, isEqual, ThemeColor } from '@react-design-system/utils';

interface ButtonProps {
  children: ReactChild;
  classNames?: { button?: string };
  testIds?: { button?: string };
  onClick: (optionalValue: any) => void;
  type?: 'button' | 'submit';
  extensions?: {
    style?: 'group-start' | 'group-center' | 'group-end' | 'outline' | 'solid';
    color?: ThemeColor;
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
  extensions: {
    style: styleExtension = 'solid',
    color: colorExtension = 'first',
  } = {
    style: 'solid',
    color: 'first',
  },
  onClick,
  type = 'button',
}) => {
  return (
    <button
      className={joinStyles(
        'rds-Button__button--base',
        isEqual(styleExtension, 'solid') &&
          `rds-Button__button--solid_${colorExtension}`,
        isEqual(styleExtension, 'outline') &&
          `rds-Button__button--outline_${colorExtension}`,
        isEqual(styleExtension, 'group-start') &&
          `rds-Button__button--group-start_${colorExtension}`,
        isEqual(styleExtension, 'group-center') &&
          `rds-Button__button--group-center_${colorExtension}`,
        isEqual(styleExtension, 'group-end') &&
          `rds-Button__button--group-end_${colorExtension}`,
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
