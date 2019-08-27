import React, { FC, ReactNode } from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import './index.sass';
import Button from './';

const buttonStories = storiesOf('Components/Button', module);

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
            shape: 'squared',
            style: 'solid',
          }}
        >
          Save
        </Button>

        <Button
          variants={{
            type: 'primary',
            style: 'outlined',
            shape: 'squared',
          }}
        >
          Learn more
        </Button>

        <Button
          variants={{
            type: 'primary',
            style: 'text',
            shape: 'squared',
          }}
        >
          Learn more
        </Button>
      </Row>

      <Row>
        <Button
          variants={{
            type: 'primary',
            shape: 'rounded',
            style: 'solid',
          }}
        >
          Save
        </Button>

        <Button
          variants={{
            type: 'primary',
            style: 'outlined',
            shape: 'rounded',
          }}
        >
          Learn more
        </Button>

        <Button
          variants={{
            type: 'primary',
            style: 'text',
            shape: 'rounded',
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
            shape: 'squared',
            style: 'solid',
          }}
        >
          Cancel
        </Button>

        <Button
          variants={{
            type: 'secondary',
            style: 'outlined',
            shape: 'squared',
          }}
        >
          Cancel
        </Button>

        <Button
          variants={{
            type: 'secondary',
            style: 'text',
            shape: 'squared',
          }}
        >
          Learn more
        </Button>
      </Row>

      <Row>
        <Button
          variants={{
            type: 'secondary',
            shape: 'rounded',
            style: 'solid',
          }}
        >
          Cancel
        </Button>

        <Button
          variants={{
            type: 'secondary',
            style: 'outlined',
            shape: 'rounded',
          }}
        >
          Cancel
        </Button>

        <Button
          variants={{
            type: 'secondary',
            style: 'text',
            shape: 'rounded',
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
            shape: 'squared',
            style: 'solid',
          }}
        >
          Delete
        </Button>

        <Button
          variants={{
            type: 'destructive',
            style: 'outlined',
            shape: 'squared',
          }}
        >
          Reset
        </Button>

        <Button
          variants={{
            type: 'destructive',
            style: 'text',
            shape: 'squared',
          }}
        >
          Dismiss
        </Button>
      </Row>

      <Row>
        <Button
          variants={{
            type: 'destructive',
            shape: 'rounded',
            style: 'solid',
          }}
        >
          Delete
        </Button>

        <Button
          variants={{
            type: 'destructive',
            style: 'outlined',
            shape: 'rounded',
          }}
        >
          Reset
        </Button>

        <Button
          variants={{
            type: 'destructive',
            style: 'text',
            shape: 'rounded',
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

const primaryButtonSolidStories = storiesOf(
  'Components/Button/Primary/Solid',
  module
);

primaryButtonSolidStories.add(
  'Squared (default)',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'primary',
      }}
    >
      Save
    </Button>
  ),
  {
    info: { inline: true },
  }
);

primaryButtonSolidStories.add(
  'Rounded',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'primary',
        shape: 'rounded',
      }}
    >
      Save
    </Button>
  ),
  {
    info: { inline: true },
  }
);

const primaryButtonOutlinedStories = storiesOf(
  'Components/Button/Primary/Outlined',
  module
);

primaryButtonOutlinedStories.add(
  'Squared (default)',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'primary',
        style: 'outlined',
      }}
    >
      Save
    </Button>
  ),
  {
    info: { inline: true },
  }
);

primaryButtonOutlinedStories.add(
  'Rounded',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'primary',
        style: 'outlined',
        shape: 'rounded',
      }}
    >
      Save
    </Button>
  ),
  {
    info: { inline: true },
  }
);

const primaryButtonTextStories = storiesOf(
  'Components/Button/Primary/Text',
  module
);

primaryButtonTextStories.add(
  'Squared (default)',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'primary',
        style: 'text',
      }}
    >
      Save
    </Button>
  ),
  {
    info: { inline: true },
  }
);

primaryButtonTextStories.add(
  'Rounded',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'primary',
        style: 'text',
        shape: 'rounded',
      }}
    >
      Save
    </Button>
  ),
  {
    info: { inline: true },
  }
);

const secondaryButtonSolidStories = storiesOf(
  'Components/Button/Secondary/Solid',
  module
);

secondaryButtonSolidStories.add(
  'Squared (default)',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'secondary',
      }}
    >
      Cancel
    </Button>
  ),
  {
    info: { inline: true },
  }
);

secondaryButtonSolidStories.add(
  'Rounded',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'secondary',
        shape: 'rounded',
      }}
    >
      Cancel
    </Button>
  ),
  {
    info: { inline: true },
  }
);

const secondaryButtonOutlinedStories = storiesOf(
  'Components/Button/Secondary/Outlined',
  module
);

secondaryButtonOutlinedStories.add(
  'Squared (default)',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'secondary',
        style: 'outlined',
      }}
    >
      Cancel
    </Button>
  ),
  {
    info: { inline: true },
  }
);

secondaryButtonOutlinedStories.add(
  'Rounded',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'secondary',
        style: 'outlined',
        shape: 'rounded',
      }}
    >
      Cancel
    </Button>
  ),
  {
    info: { inline: true },
  }
);

const secondaryButtonTextStories = storiesOf(
  'Components/Button/Secondary/Text',
  module
);

secondaryButtonTextStories.add(
  'Squared (default)',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'secondary',
        style: 'text',
      }}
    >
      Cancel
    </Button>
  ),
  {
    info: { inline: true },
  }
);

secondaryButtonTextStories.add(
  'Rounded',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'secondary',
        style: 'text',
        shape: 'rounded',
      }}
    >
      Cancel
    </Button>
  ),
  {
    info: { inline: true },
  }
);

const destructiveButtonSolidStories = storiesOf(
  'Components/Button/Destructive/Solid',
  module
);

destructiveButtonSolidStories.add(
  'Squared (default)',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'destructive',
      }}
    >
      Delete
    </Button>
  ),
  {
    info: { inline: true },
  }
);

destructiveButtonSolidStories.add(
  'Rounded',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'destructive',
        shape: 'rounded',
      }}
    >
      Delete
    </Button>
  ),
  {
    info: { inline: true },
  }
);

const destructiveButtonOutlinedStories = storiesOf(
  'Components/Button/Destructive/Outlined',
  module
);

destructiveButtonOutlinedStories.add(
  'Squared (default)',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'destructive',
        style: 'outlined',
      }}
    >
      Delete
    </Button>
  ),
  {
    info: { inline: true },
  }
);

destructiveButtonOutlinedStories.add(
  'Rounded',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'destructive',
        style: 'outlined',
        shape: 'rounded',
      }}
    >
      Delete
    </Button>
  ),
  {
    info: { inline: true },
  }
);

const destructiveButtonTextStories = storiesOf(
  'Components/Button/Destructive/Text',
  module
);

destructiveButtonTextStories.add(
  'Squared (default)',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'destructive',
        style: 'text',
      }}
    >
      Delete
    </Button>
  ),
  {
    info: { inline: true },
  }
);

destructiveButtonTextStories.add(
  'Rounded',
  () => (
    <Button
      onClick={() => {}}
      variants={{
        type: 'destructive',
        style: 'text',
        shape: 'rounded',
      }}
    >
      Delete
    </Button>
  ),
  {
    info: { inline: true },
  }
);
