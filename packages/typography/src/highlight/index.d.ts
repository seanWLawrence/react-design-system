import { FC, ReactNode, PropsWithRef } from 'react';
interface HighlightProps {
    children: ReactNode;
}
export declare let Highlight: FC<HighlightProps & PropsWithRef<JSX.IntrinsicElements['mark']>>;
export default Highlight;
