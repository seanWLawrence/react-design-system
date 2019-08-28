import React, { FC, ReactNode } from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import './index.sass';
import Button from './';

const buttonStories = storiesOf('UI/Button', module);

/**
 * Utility components for displaying the stories nicer
 */
let Row: FC<{ children: ReactNode; title?: string }> = ({
  children,
  title,
}) => (
  <div style={{ margin: '30px 20px' }}>
    <h4 style={{ fontFamily: 'sans-serif', marginBottom: 10, color: '#333' }}>
      {title}
    </h4>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: 300,
        marginBottom: 0,
      }}
    >
      {children}
    </div>
  </div>
);

let Margin = () => <div style={{ marginBottom: 40 }}></div>;

buttonStories.add(
  'All',
  () => (
    <>
      <Row title="Primary">
        <Button
          variants={{
            type: 'primary',
            style: 'solid',
          }}
        >
          Save
        </Button>

        <Button
          variants={{
            type: 'primary',
            style: 'outlined',
          }}
        >
          Learn more
        </Button>

        <Button
          variants={{
            type: 'primary',
            style: 'text',
          }}
        >
          Learn more
        </Button>
      </Row>

      <Margin />

      <Row title="Secondary">
        <Button
          variants={{
            type: 'secondary',
            style: 'solid',
          }}
        >
          Cancel
        </Button>

        <Button
          variants={{
            type: 'secondary',
            style: 'outlined',
          }}
        >
          Cancel
        </Button>

        <Button
          variants={{
            type: 'secondary',
            style: 'text',
          }}
        >
          Learn more
        </Button>
      </Row>

      <Margin />

      <Row title="Destructive">
        <Button
          variants={{
            type: 'destructive',
            style: 'solid',
          }}
        >
          Delete
        </Button>

        <Button
          variants={{
            type: 'destructive',
            style: 'outlined',
          }}
        >
          Reset
        </Button>

        <Button
          variants={{
            type: 'destructive',
            style: 'text',
          }}
        >
          Dismiss
        </Button>
      </Row>
    </>
  ),
  {
    info: { inline: true },
  }
);

buttonStories.add(
  'With knobs',
  () => (
    <Button
      variants={{
        type: select(
          'Color',
          {
            Primary: 'primary',
            Secondary: 'secondary',
            Destructive: 'destructive',
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
      }}
    >
      {text('Text', 'Save')}
    </Button>
  ),
  {
    info: { inline: true },
  }
);
