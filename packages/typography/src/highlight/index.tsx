import React, { FC, ReactNode, PropsWithRef } from 'react';
import { joinStyles } from '@react-design-system/utils';

interface HighlightProps {
  children: ReactNode;
}

export let Highlight: FC<
  HighlightProps & PropsWithRef<JSX.IntrinsicElements['mark']>
> = ({ children, title, ...props }) => {
  return (
    <mark
      {...props}
      className={joinStyles('rds-Highlight__mark', props.className)}
    >
      {children}
    </mark>
  );
};

export default Highlight;
