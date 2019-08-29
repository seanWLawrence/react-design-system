import React from 'react';
import { storiesOf } from '@storybook/react';
import './index.sass';
import Highlight from '.';

const highlightStories = storiesOf('Typography/Highlight', module);

highlightStories.add('Default', () => {
  return (
    <p style={{ fontFamily: 'sans-serif', maxWidth: 500, lineHeight: 1.5 }}>
      Hey there, <Highlight>this text is highlighted</Highlight>!
    </p>
  );
});
