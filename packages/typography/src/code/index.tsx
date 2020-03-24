import React, { Component, PropsWithRef } from 'react';

import { joinStyles } from '@react-design-system/utils';

interface CodeProps {
  children: string;
  variants: { type?: 'inline' | 'block'; language: string };
  preProps?: PropsWithRef<JSX.IntrinsicElements['pre']>;
  codeProps?: PropsWithRef<JSX.IntrinsicElements['code']>;
}

export class Code extends Component<CodeProps, {}> {
  componentDidMount() {
    // import('prismjs').then(() => {
    //   if (process.env.NODE_ENV === 'development') {
    //     console.info('Loaded Prisma.js');
    //   }
    // });
  }

  render() {
    let {
      children,
      variants: { language, type = 'block' },
      preProps = {},
      codeProps = {},
    } = this.props;

    switch (type) {
      case 'inline':
        return (
          <code
            {...codeProps}
            className={joinStyles(
              `language-${language}`,
              'rds-Code__code',
              codeProps.className
            )}
          >
            {children}
          </code>
        );

      default:
        return (
          <pre
            {...preProps}
            className={joinStyles(
              `language-${language}`,
              'rds-Code__pre',
              preProps.className
            )}
          >
            <code
              {...codeProps}
              className={joinStyles(
                `language-${language}`,
                codeProps.className
              )}
            >
              {children}
            </code>
          </pre>
        );
    }
  }
}

export default Code;
