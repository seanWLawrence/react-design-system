import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import '@react-design-system/theme/index.css';
import './index.css';
import Button from './';

const storiesForButton = storiesOf('Components/Button', module);

storiesForButton.addDecorator(withKnobs);

storiesForButton.add(
  'Default (Solid)',
  () => (
    <Button
      onClick={() => {}}
      extensions={{
        color: select(
          'Color',
          {
            First: 'first',
            Second: 'second',
            Third: 'third',
            Fourth: 'fourth',
          },
          'first'
        ),
      }}
    >
      Click me!
    </Button>
  ),
  {
    info: { inline: true },
  }
);

storiesForButton.add(
  'Outline',
  () => (
    <Button onClick={() => {}} extensions={{ style: 'outline' }}>
      Click me!
    </Button>
  ),
  {
    info: { inline: true },
  }
);

storiesForButton.add(
  'Group start',
  () => (
    <Button onClick={() => {}} extensions={{ style: 'group-start' }}>
      Click me!
    </Button>
  ),
  {
    info: { inline: true },
  }
);

storiesForButton.add(
  'Group Center',
  () => (
    <Button onClick={() => {}} extensions={{ style: 'group-center' }}>
      Click me!
    </Button>
  ),
  {
    info: { inline: true },
  }
);

storiesForButton.add(
  'Group End',
  () => (
    <Button onClick={() => {}} extensions={{ style: 'group-end' }}>
      Click me!
    </Button>
  ),
  {
    info: { inline: true },
  }
);
