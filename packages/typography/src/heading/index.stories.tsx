import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import './index.sass';
import Heading from './';

const headingStories = storiesOf('Typography/Heading', module);

headingStories.add('All', () => (
  <>
    <Heading
      variants={{
        type: 'h1',
      }}
    >
      Heading 1
    </Heading>

    <Heading
      variants={{
        type: 'h2',
      }}
    >
      Heading 2
    </Heading>

    <Heading
      variants={{
        type: 'h3',
      }}
    >
      Heading 3
    </Heading>

    <Heading
      variants={{
        type: 'h4',
      }}
    >
      Heading 4
    </Heading>

    <Heading
      variants={{
        type: 'h5',
      }}
    >
      Heading 5
    </Heading>

    <Heading
      variants={{
        type: 'h6',
      }}
    >
      Heading 6
    </Heading>
  </>
));

headingStories.add('With knobs', () => (
  <Heading
    variants={{
      type: select(
        'Type',
        { H1: 'h1', H2: 'h2', H3: 'h3', H4: 'h4', H5: 'h5', H6: 'h6' },
        'h1'
      ),
    }}
  >
    {text('Text', 'Heading')}
  </Heading>
));
