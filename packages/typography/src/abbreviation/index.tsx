import React, { FC, ReactNode, PropsWithRef } from 'react';
import { joinStyles } from '@react-design-system/utils';

interface AbbreviationProps {
  children: ReactNode;
  title?: string;
}

export let Abbreviation: FC<
  AbbreviationProps & PropsWithRef<JSX.IntrinsicElements['h1']>
> = ({ children, title, ...props }) => {
  return (
    <abbr
      {...props}
      className={joinStyles('rds-Abbreviation__abbreviation-wrapper')}
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
