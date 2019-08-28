import React from 'react';
import { storiesOf } from '@storybook/react';
import './index.sass';
import Blockquote from '.';

const blockquoteStories = storiesOf('Typography/Blockquote', module);

blockquoteStories.add('Default', () => {
  return (
    <Blockquote>
      <p>“Don't cry because it's over, smile because it happened.” </p>

      <footer>
        - <cite>Dr. Suess</cite>
      </footer>
    </Blockquote>
  );
});
