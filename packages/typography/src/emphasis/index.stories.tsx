import React from 'react';
import { storiesOf } from '@storybook/react';
import './index.sass';
import Emphasis from '.';

const emphasisStories = storiesOf('Typography/Emphasis', module);

emphasisStories.add('Default', () => {
  return <Emphasis>This text is emphasised!</Emphasis>;
});
