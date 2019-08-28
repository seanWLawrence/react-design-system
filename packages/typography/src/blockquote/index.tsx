import React, { FC, ReactNode, PropsWithRef } from 'react';
import { joinStyles } from '@react-design-system/utils';

interface BlockquoteProps {
  children: ReactNode;
}

export let Blockquote: FC<
  BlockquoteProps & PropsWithRef<JSX.IntrinsicElements['blockquote']>
> = ({ children, title, ...props }) => {
  return (
    <blockquote
      {...props}
      className={joinStyles('rds-Blockquote__blockquote', props.className)}
    >
      {children}
    </blockquote>
  );
};

export default Blockquote;
