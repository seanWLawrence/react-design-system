import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// const stories = storiesOf('Components/Input', module);

import Input from './';
import State from '../utils/State';

import { setInputState, onEvent } from '../utils';

let name = 'name';
let label = 'Name';

const storiesWithText = storiesOf('Components/Input/Text', module);

storiesWithText.add(
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

storiesWithText.add(
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

const storiesWithColor = storiesOf('Components/Input/Color', module);

storiesWithColor.add(
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
            type="color"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithCheckbox = storiesOf('Components/Input/Checkbox', module);

storiesWithCheckbox.add(
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
            type="checkbox"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithDate = storiesOf('Components/Input/Date', module);

storiesWithDate.add(
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
            type="date"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithDateTimeLocal = storiesOf(
  'Components/Input/DateTimeLocal',
  module
);

storiesWithDateTimeLocal.add(
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
            type="datetime-local"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithEmail = storiesOf('Components/Input/Email', module);

storiesWithEmail.add(
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
            type="email"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithFile = storiesOf('Components/Input/File', module);

storiesWithFile.add(
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
            type="file"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithHidden = storiesOf('Components/Input/Hidden', module);

storiesWithHidden.add(
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
            type="hidden"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithImage = storiesOf('Components/Input/Image', module);

storiesWithImage.add(
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
            type="image"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithMonth = storiesOf('Components/Input/Month', module);

storiesWithMonth.add(
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
            type="month"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithNumber = storiesOf('Components/Input/Number', module);

storiesWithNumber.add(
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
            type="number"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithPassword = storiesOf('Components/Input/Password', module);

storiesWithPassword.add(
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
            type="password"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithRadio = storiesOf('Components/Input/Radio', module);

storiesWithRadio.add(
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
            type="radio"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithRange = storiesOf('Components/Input/Range', module);

storiesWithRange.add(
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
            type="range"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithReset = storiesOf('Components/Input/Reset', module);

storiesWithReset.add(
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
            type="reset"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithSearch = storiesOf('Components/Input/Search', module);

storiesWithSearch.add(
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
            type="search"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithSubmit = storiesOf('Components/Input/Submit', module);

storiesWithSubmit.add(
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
            type="submit"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithTel = storiesOf('Components/Input/Tel', module);

storiesWithTel.add(
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
            type="tel"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithTime = storiesOf('Components/Input/Time', module);

storiesWithTime.add(
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
            type="time"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithUrl = storiesOf('Components/Input/Url', module);

storiesWithUrl.add(
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
            type="url"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

const storiesWithWeek = storiesOf('Components/Input/Week', module);

storiesWithWeek.add(
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
            type="week"
          />
        );
      }}
    </State>
  ),
  { info: { inline: true } }
);

storiesWithText.add(
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

const storiesWithForm = storiesOf('Components/Input/Text/withForm', module);

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
