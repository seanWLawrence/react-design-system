# React Design System

🚧 Work in progress, not ready for usage yet 🚧

Accessible, easily customizable components for building a design system in React. Written in Typescript.

## TODO

- [ ] UI elements
  - [x] Button
    - [x] Outline
    - [x] Solid
    - [x] Text
  - [ ] Button group
  - [ ] Accordion
  - [ ] Alert
  - [ ] Badge
  - [ ] Breadcrumbs
    - [ ] Breadcrumb
    - [ ]
  - [ ] Card
  - [ ] Collapse
  - [ ] Embed
  - [ ] Header
  - [ ] Image
    - [ ] Responsive
    - [ ] Thumbnail
  - [ ] Modal
  - [ ] Spinners
    - [ ] Circle
    - [ ] Cradle
- [ ] Typography
  - [x] Abbreviation
  - [x] Blockquote
  - [ ] Caption
  - [ ] Code
    - [x] Inline
    - [ ] Block
  - [x] Emphasis
  - [x] Heading
    - [x] One
    - [x] Two
    - [x] Three
    - [x] Four
    - [x] Five
    - [x] Six
  - [x] Highlight
  - [ ] List
    - [ ] Unordered
    - [ ] Ordered
    - [ ] Description
  - [ ] Paragraph
  - [ ] Small
  - [ ] Strikethrough
  - [ ] Strong
  - [ ] Underline
- [ ] Form elements
  - [ ] Form
  - [ ] Legend
  - [ ] Input
    - [ ] Button
    - [ ] Checkbox
    - [x] Color
    - [x] Date
    - [x] DateTime-Local
    - [x] Email
    - [ ] File
    - [x] Hidden
    - [ ] Image
    - [x] Month
    - [x] Number
    - [x] Password
    - [ ] Radio
    - [ ] Range
    - [ ] Reset
    - [ ] Search
    - [ ] Submit
    - [x] Tel
    - [x] Text
    - [x] Time
    - [x] Url
    - [x] Week
  - [ ] Label
  - [ ] Select
  - [ ] TextArea
- [ ] Layout
  - [ ] Column
  - [ ] Fieldset
  - [ ] Figure
  - [ ] Flex
  - [ ] Row
  - [ ] Table
    - [ ] Table
    - [ ] TableRow
    - [ ] TableHead
    - [ ] TableHeadCell
    - [ ] TableBody
    - [ ] TableBodyCell
- [ ] Utilities
  - [ ] Overflow
  - [ ] Shadow
  - [ ] Visibility
- [ ] CLI
  - [ ] Generate all components
  - [ ] Generate single component
- [ ] Documentation
  - [ ] Components
    - [ ] Storybook
    - [ ] API
  - [ ] Usage
    - [ ] Generator
    - [ ] Imports

## Installation

> Note: this package is not available yet

```sh
yarn add @react-design-system/core
```

## Basic usage

Import a component and pass in some props! You'll get an accessible, easy to use component out of the box with zero setup.

```tsx
import React, { useState } from 'react';
import { Input } from '@react-design-system/core';

export default () => {
  let [myFirstInput, setMyFirstInput] = useState(null);

  return (
    <Input
      name="my-first-input"
      label="My First Input"
      value={myFirstInput}
      onChange={setMyFirstInput}
    />
  );
};
```

<details>
  <summary>
    Wait... what about styles?
  </summary>

Import our default styles.

</details>

```tsx
import React, { useState } from 'react';
import { Input } from '@react-design-system/core';

// The theme file needs to be imported first, since it contains the CSS Variables
import '@react-design-system/theme.css';
import '@react-design-system/Input.css';

export default () => {
  let [myFirstInput, setMyFirstInput] = useState(null);

  return (
    <Input
      name="my-first-input"
      label="My First Input"
      value={myFirstInput}
      onChange={setMyFirstInput}
    />
  );
};
```

<details>
  <summary>
    Better... but what about customizing the styles so I can create my own design system?
  </summary>

Glad you asked, as this is most important reason you'd want to use this library.

Let's create a file in our `components` folder called `Input` and customize the styling for our design system. We'll also use the `joinStyles` helper so we can still customize it more when we need to.

</details>

```css
/* components/Input/index.css */

.my-custom-input-class {
  color: darkgray;
}

.my-custom-input-label-class {
  color: cornflowerblue;
}
```

```tsx
/* components/Input/index.js */

import React, { useState } from 'react';
import { Input, joinStyles } from '@react-design-system/core';
import 'index.css';

export default function Input(props) {
  return (
    <Input
      {...props}
      classNames={{
        label: joinStyles(
          'my-custom-input-label-class',
          props.classNames.label
        ),
        input: joinStyles('my-custom-input-class', props.classNames.input),
      }}
    />
  );
}

Input.defaultProps = {
  classNames: {
    label: '',
    input: '',
  },
};
```

<details>
  <summary>
    Much better... but is there a way to automate this?
  </summary>

Yep! We have a CLI to easily scaffold an entire design system, or individual components that you need.

</details>

Generate all available components in your components directory.

```sh
npx @react-design-system/cli generate all --path src/components
```

Or a specific one.

```sh
npx @react-design-system/cli generate Input --path src/components
```

## Documentation

Coming soon!

[Storybook](https://seanwlawrence.github.io/react-design-system/storybook)

[Usage](https://seanwlawrence.github.io/react-design-system/)

## Contributing

All contributions welcome! Please create an issue with what you'd like to work on and we can work out the details.

Instructions:

Clone the repository and install the dependencies.

```sh
git clone https://github.com/seanWLawrence/react-design-system.git
cd react-design-system
yarn
```

Launch Storybook in one terminal.

```sh
yarn storybook
```

And the test suite in another. Example shown is for the `Input` component.

```sh
yarn test packages/input --watch
```

And hack away!

## License

MIT
