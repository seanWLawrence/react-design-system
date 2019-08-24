import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Components/Input', module);

import Input from './';
import State from '../utils/State';

import { setInputState, onEvent } from '../utils';

let name = 'name';
let label = 'Name';

stories.add(
  'Default',
  () => (
    <State initialState={{ [name]: '' }}>
      {({ state, setState }) => {
        return (
          <Input
            value={state[name]}
            onChange={event => {
              setInputState({ state, setState })(event);
              action('onChange')(event);
            }}
            name={name}
            label={label}
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

stories.add(
  'Required',
  () => (
    <State initialState={{ [name]: '' }}>
      {({ state, setState }) => {
        return (
          <Input
            value={state[name]}
            onChange={event => {
              setInputState({ state, setState })(event);
              action('onChange')(event);
            }}
            name={name}
            label={label}
            required
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

stories.add(
  'Custom onBlur',
  () => (
    <State initialState={{ [name]: '' }}>
      {({ state, setState }) => {
        return (
          <Input
            value={state[name]}
            onChange={event => {
              setInputState({ state, setState })(event);
              action('onChange')(event);
            }}
            name={name}
            label={label}
            onBlur={() => alert('Blurred!')}
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithForm = storiesOf('Components/Input/withForm', module);

storiesWithForm.add(
  'Required',
  () => (
    <State initialState={{ [name]: '' }}>
      {({ state, setState }) => {
        return (
          <form onSubmit={onEvent(() => alert('Submitted!'))}>
            <Input
              value={state[name]}
              onChange={event => {
                setInputState({ state, setState })(event);
                action('onChange')(event);
              }}
              name={name}
              label={label}
              required
            />
            <button>Submit</button>
          </form>
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

storiesWithForm.add(
  'Custom error message',
  () => (
    <State initialState={{ [name]: '' }}>
      {({ state, setState }) => {
        return (
          <form onSubmit={onEvent(() => alert('Submitted!'))}>
            <Input
              value={state[name]}
              onChange={event => {
                setInputState({ state, setState })(event);
                action('onChange')(event);
              }}
              name={name}
              label={label}
              onError="Can't be blank!"
              required
            />
            <button>Submit</button>
          </form>
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

storiesWithForm.add(
  'Custom validation and error message',
  () => (
    <State initialState={{ [name]: '' }}>
      {({ state, setState }) => {
        return (
          <form onSubmit={onEvent(() => alert('Submitted!'))}>
            <Input
              value={state[name]}
              onChange={event => {
                setInputState({ state, setState })(event);
                action('onChange')(event);
              }}
              name={name}
              label="Only valid with the word 'specific'"
              onError={value =>
                `Expected "specific" and received "${value[name]}"`
              }
              required
              pattern="specific$"
            />
            <button>Submit</button>
          </form>
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);
