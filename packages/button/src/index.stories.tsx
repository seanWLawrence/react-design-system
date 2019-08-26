import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import '@react-design-system/theme/index.css';
import './index.css';
import Button from './';

const storiesForButton = storiesOf('Components/Button', module);

storiesForButton.add(
  'Default (Solid)',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        color: select(
          'Color',
          {
            Primary: 'primary',
            Secondary: 'secondary',
            Error: 'error',
          },
          'primary'
        ),
        style: select(
          'Style',
          {
            Solid: 'solid',
            Outlined: 'outlined',
            Text: 'text',
          },
          'solid'
        ),
        shape: select(
          'Shape',
          { Squared: 'squared', Rounded: 'rounded' },
          'squared'
        ),
      }}
    >
      {text('Text', 'Save')}
    </Button>
  ),
  {
    info: { inline: true },
  }
);
