import React from 'react';
import { storiesOf } from '@storybook/react';
import './index.sass';
import Code from '.';
import Heading from '../heading';
import 'prismjs/themes/prism-tomorrow.css';

const codeStories = storiesOf('Typography/Code', module);

codeStories.add('Default', () => {
  return (
    <>
      <Heading variants={{ type: 'h6' }}>Block</Heading>

      <Code variants={{ language: 'javascript' }}>
        let yo = 'hello, world!'
      </Code>

      <div style={{ marginTop: 50 }}></div>

      <Heading variants={{}}>Inline</Heading>

      <Code variants={{ language: 'javascript', type: 'inline' }}>
        let yo = 'hello, world!'
      </Code>
    </>
  );
});
