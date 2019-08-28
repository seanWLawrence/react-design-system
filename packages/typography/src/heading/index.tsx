import React, { FC, ReactNode, PropsWithRef } from 'react';
import { joinStyles } from '@react-design-system/utils';

interface HeadingProps {
  children: ReactNode;
  variants?: {
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };
}

export let Heading: FC<
  HeadingProps & PropsWithRef<JSX.IntrinsicElements['h1']>
> = ({
  children,
  variants: { type: typeVariant = 'h6' } = {
    type: 'h6',
  },
  ...props
}) => {
  let className = joinStyles(`rds-Heading__${typeVariant}`, props.className);

  let H1 = (
    <h1 {...props} className={className}>
      {children}
    </h1>
  );

  switch (typeVariant) {
    case 'h1':
      return H1;

    case 'h2':
      return (
        <h2 {...props} className={className}>
          {children}
        </h2>
      );

    case 'h3':
      return (
        <h3 {...props} className={className}>
          {children}
        </h3>
      );

    case 'h4':
      return (
        <h4 {...props} className={className}>
          {children}
        </h4>
      );

    case 'h5':
      return (
        <h5 {...props} className={className}>
          {children}
        </h5>
      );

    case 'h6':
      return (
        <h6 {...props} className={className}>
          {children}
        </h6>
      );

    default:
      return H1;
  }
};

export default Heading;
