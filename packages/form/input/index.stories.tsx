import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { setInputState } from '@react-design-system/utils';

import Input from './';
import './index.sass';

const stories = storiesOf('Form/Input', module);

stories.add('Default', () => {
  let [state, setState] = useState<{ [key: string]: string }>({});

  return (
    <div>
      <div>
        <Input
          value={state.text}
          onChange={setInputState({ state, setState })}
          name="text"
          type="text"
          label="Text"
        />
      </div>

      <div>
        <Input
          value={state.email}
          onChange={setInputState({ state, setState })}
          name="email"
          type="email"
          label="Email"
        />
      </div>

      <div>
        <Input
          value={state.number}
          onChange={setInputState({ state, setState })}
          name="number"
          type="number"
          label="Number"
        />
      </div>

      <div>
        <Input
          value={state.password}
          onChange={setInputState({ state, setState })}
          name="password"
          type="password"
          label="Password"
        />
      </div>

      <div>
        <Input
          value={state.search}
          onChange={setInputState({ state, setState })}
          name="search"
          type="search"
          label="Search"
        />
      </div>

      <div>
        <Input
          value={state.tel}
          onChange={setInputState({ state, setState })}
          name="tel"
          type="tel"
          label="Telephone"
        />
      </div>

      <div>
        <Input
          value={state.url}
          onChange={setInputState({ state, setState })}
          name="url"
          type="url"
          label="Url"
        />
      </div>

      <div>
        <Input
          value={state.color}
          onChange={setInputState({ state, setState })}
          name="color"
          type="color"
          label="Color"
        />
      </div>

      <div>
        <Input
          value={state.date}
          onChange={setInputState({ state, setState })}
          name="date"
          type="date"
          label="Date"
        />
      </div>

      <div>
        <Input
          value={state['datetime-local']}
          onChange={setInputState({ state, setState })}
          name="datetime-local"
          type="datetime-local"
          label="Date Time Local"
        />
      </div>

      <div>
        <Input
          value={state.time}
          onChange={setInputState({ state, setState })}
          name="time"
          type="time"
          label="Time"
        />
      </div>

      <div>
        <Input
          value={state.week}
          onChange={setInputState({ state, setState })}
          name="week"
          type="week"
          label="Week"
        />
      </div>

      <div>
        <Input
          value={state.month}
          onChange={setInputState({ state, setState })}
          type="month"
          name="month"
          label="Month"
        />
      </div>

      <div>
        <Input
          value={state.file}
          onChange={setInputState({ state, setState })}
          name="file"
          type="file"
          label="File"
        />
      </div>

      <div>
        <Input
          value={state.image}
          onChange={setInputState({ state, setState })}
          name="image"
          type="image"
          label="Image"
        />
      </div>

      <div>
        <Input
          value={state.radio}
          onChange={setInputState({ state, setState })}
          name="radio"
          type="radio"
          label="Radio"
        />
      </div>

      <div>
        <Input
          value={state.range}
          onChange={setInputState({ state, setState })}
          name="range"
          type="range"
          label="Range"
        />
      </div>

      <div>
        <Input value="Reset" type="reset" />
      </div>

      <div>
        <Input value="Button" type="button" />
      </div>

      <div>
        <Input value="Submit" type="submit" />
      </div>
    </div>
  );
});

stories.add('Required', () => {
  let [state, setState] = useState<{ [key: string]: string }>({});

  return (
    <div>
      <div>
        <Input
          required
          value={state.text}
          onChange={setInputState({ state, setState })}
          name="text"
          type="text"
          label="Text"
        />
      </div>

      <div>
        <Input
          required
          value={state.email}
          onChange={setInputState({ state, setState })}
          name="email"
          type="email"
          label="Email"
        />
      </div>

      <div>
        <Input
          required
          value={state.number}
          onChange={setInputState({ state, setState })}
          name="number"
          type="number"
          label="Number"
        />
      </div>

      <div>
        <Input
          required
          value={state.password}
          onChange={setInputState({ state, setState })}
          name="password"
          type="password"
          label="Password"
        />
      </div>

      <div>
        <Input
          required
          value={state.search}
          onChange={setInputState({ state, setState })}
          name="search"
          type="search"
          label="Search"
        />
      </div>

      <div>
        <Input
          required
          value={state.tel}
          onChange={setInputState({ state, setState })}
          name="tel"
          type="tel"
          label="Telephone"
        />
      </div>

      <div>
        <Input
          required
          value={state.url}
          onChange={setInputState({ state, setState })}
          name="url"
          type="url"
          label="Url"
        />
      </div>

      <div>
        <Input
          required
          value={state.color}
          onChange={setInputState({ state, setState })}
          name="color"
          type="color"
          label="Color"
        />
      </div>

      <div>
        <Input
          required
          value={state.date}
          onChange={setInputState({ state, setState })}
          name="date"
          type="date"
          label="Date"
        />
      </div>

      <div>
        <Input
          required
          value={state['datetime-local']}
          onChange={setInputState({ state, setState })}
          name="datetime-local"
          type="datetime-local"
          label="Date Time Local"
        />
      </div>

      <div>
        <Input
          required
          value={state.time}
          onChange={setInputState({ state, setState })}
          name="time"
          type="time"
          label="Time"
        />
      </div>

      <div>
        <Input
          required
          value={state.week}
          onChange={setInputState({ state, setState })}
          name="week"
          type="week"
          label="Week"
        />
      </div>

      <div>
        <Input
          required
          value={state.month}
          onChange={setInputState({ state, setState })}
          type="month"
          name="month"
          label="Month"
        />
      </div>

      <div>
        <Input
          required
          value={state.file}
          onChange={setInputState({ state, setState })}
          name="file"
          type="file"
          label="File"
        />
      </div>

      <div>
        <Input
          required
          value={state.image}
          onChange={setInputState({ state, setState })}
          name="image"
          type="image"
          label="Image"
        />
      </div>

      <div>
        <Input
          required
          value={state.radio}
          onChange={setInputState({ state, setState })}
          name="radio"
          type="radio"
          label="Radio"
        />
      </div>

      <div>
        <Input
          required
          value={state.range}
          onChange={setInputState({ state, setState })}
          name="range"
          type="range"
          label="Range"
        />
      </div>
    </div>
  );
});

// const storiesWithFile = storiesOf('Form/Input/File', module);

// storiesWithFile.add(
//   'Default',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             type="file"
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// const storiesWithHidden = storiesOf('Form/Input/Hidden', module);

// storiesWithHidden.add(
//   'Default',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             type="hidden"
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// const storiesWithImage = storiesOf('Form/Input/Image', module);

// storiesWithImage.add(
//   'Default',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             type="image"
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// const storiesWithMonth = storiesOf('Form/Input/Month', module);

// storiesWithMonth.add(
//   'Default',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             type="month"
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// const storiesWithNumber = storiesOf('Form/Input/Number', module);

// storiesWithNumber.add(
//   'Default',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             type="number"
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// const storiesWithPassword = storiesOf('Form/Input/Password', module);

// storiesWithPassword.add(
//   'Default',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             type="password"
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// const storiesWithRadio = storiesOf('Form/Input/Radio', module);

// storiesWithRadio.add(
//   'Default',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             type="radio"
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// const storiesWithRange = storiesOf('Form/Input/Range', module);

// storiesWithRange.add(
//   'Default',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             type="range"
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// const storiesWithReset = storiesOf('Form/Input/Reset', module);

// storiesWithReset.add(
//   'Default',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             type="reset"
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// const storiesWithSearch = storiesOf('Form/Input/Search', module);

// storiesWithSearch.add(
//   'Default',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             type="search"
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// const storiesWithSubmit = storiesOf('Form/Input/Submit', module);

// storiesWithSubmit.add(
//   'Default',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             type="submit"
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// const storiesWithTel = storiesOf('Form/Input/Tel', module);

// storiesWithTel.add(
//   'Default',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             type="tel"
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// const storiesWithTime = storiesOf('Form/Input/Time', module);

// storiesWithTime.add(
//   'Default',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             type="time"
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// const storiesWithUrl = storiesOf('Form/Input/Url', module);

// storiesWithUrl.add(
//   'Default',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             type="url"
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// const storiesWithWeek = storiesOf('Form/Input/Week', module);

// storiesWithWeek.add(
//   'Default',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             type="week"
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// storiesWithText.add(
//   'Custom onBlur',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <Input
//             value={state[name]}
//             onChange={event => {
//               setInputState({ state, setState })(event);
//               action('onChange')(event);
//             }}
//             name={name}
//             label={label}
//             onBlur={() => alert('Blurred!')}
//           />
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// const storiesWithForm = storiesOf('Form/Input/Text/withForm', module);

// storiesWithForm.add(
//   'Required',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <form onSubmit={onEvent(() => alert('Submitted!'))}>
//             <Input
//               value={state[name]}
//               onChange={event => {
//                 setInputState({ state, setState })(event);
//                 action('onChange')(event);
//               }}
//               name={name}
//               label={label}
//               required
//             />
//             <button>Submit</button>
//           </form>
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// storiesWithForm.add(
//   'Custom error message',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <form onSubmit={onEvent(() => alert('Submitted!'))}>
//             <Input
//               value={state[name]}
//               onChange={event => {
//                 setInputState({ state, setState })(event);
//                 action('onChange')(event);
//               }}
//               name={name}
//               label={label}
//               onError="Can't be blank!"
//               required
//             />
//             <button>Submit</button>
//           </form>
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );

// storiesWithForm.add(
//   'Custom validation and error message',
//   () => (
//     <State initialState={{ [name]: '' }}>
//       {({ state, setState }) => {
//         return (
//           <form onSubmit={onEvent(() => alert('Submitted!'))}>
//             <Input
//               value={state[name]}
//               onChange={event => {
//                 setInputState({ state, setState })(event);
//                 action('onChange')(event);
//               }}
//               name={name}
//               label="Only valid with the word 'specific'"
//               onError={value =>
//                 `Expected "specific" and received "${value[name]}"`
//               }
//               required
//               pattern="specific$"
//             />
//             <button>Submit</button>
//           </form>
//         );
//       }}
//     </State>
//   ),
//   { info: { inline: true } }
// );
