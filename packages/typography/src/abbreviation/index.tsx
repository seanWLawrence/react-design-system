import React, { FC, ReactNode, PropsWithRef } from 'react';
import { joinStyles } from '@react-design-system/utils';

interface AbbreviationProps {
  children: ReactNode;
  title?: string;
}

export let Abbreviation: FC<
  AbbreviationProps & PropsWithRef<JSX.IntrinsicElements['abbr']>
> = ({ children, title, ...props }) => {
  return (
    <abbr
      {...props}
      className={joinStyles(
        'rds-Abbreviation__abbreviation-wrapper',
        props.className
      )}
      title={title}
      tabIndex={0}
    >
      <span className="rds-Abbreviation__abbreviation-title--hidden">
        {title},
      </span>

      {children}
    </abbr>
  );
};

export default Abbreviation;
