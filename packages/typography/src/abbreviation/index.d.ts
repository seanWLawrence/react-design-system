import { FC, ReactNode, PropsWithRef } from 'react';
interface AbbreviationProps {
  children: ReactNode;
  title?: string;
}
export declare let Abbreviation: FC<
  AbbreviationProps & PropsWithRef<JSX.IntrinsicElements['abbr']>
>;
export default Abbreviation;
