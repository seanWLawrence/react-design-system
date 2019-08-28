import { FC, ReactNode, PropsWithRef } from 'react';
interface HeadingProps {
  children: ReactNode;
  variants?: {
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };
}
declare let Heading: FC<
  HeadingProps & PropsWithRef<JSX.IntrinsicElements['h1']>
>;
export default Heading;
