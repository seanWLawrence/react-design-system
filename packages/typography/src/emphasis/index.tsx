import React, { FC, ReactNode, PropsWithRef } from 'react';
import { joinStyles } from '@react-design-system/utils';

interface EmphasisProps {
  children: ReactNode;
}

export let Emphasis: FC<
  EmphasisProps & PropsWithRef<JSX.IntrinsicElements['em']>
> = ({ children, title, ...props }) => {
  return (
    <em {...props} className={joinStyles('rds-Emphasis__em', props.className)}>
      {children}
    </em>
  );
};

export default Emphasis;
