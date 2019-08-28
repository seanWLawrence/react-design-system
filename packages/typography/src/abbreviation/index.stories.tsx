import React from 'react';
import { storiesOf } from '@storybook/react';
import './index.sass';
import Abbreviation from './';

const abbreviationStories = storiesOf('Typography/Abbreviation', module);

abbreviationStories.add('Default', () => {
  return (
    <p
      style={{
        fontFamily: 'sans-serif',
        maxWidth: 500,
        margin: '50px',
      }}
    >
      One example of an independent agency of the{' '}
      <Abbreviation title="United States Federal Government">USFG</Abbreviation>{' '}
      is{' '}
      <Abbreviation title="National Aeronautics and Space Administration">
        NASA
      </Abbreviation>
      , which is responsible for the civilian space program, as well as
      aeronautics and aerospace research. NASA was established in 1958,
      succeeding the National Advisory Committee for Aeronautics.
    </p>
  );
});
