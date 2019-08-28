import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

// automatically import all files ending in *.stories.tsx
const req = require.context('../packages', true, /\.stories\.tsx$/);

/**
 * Show accessibility results
 */
addDecorator(withA11y);

/**
 * Allow props to be dynamically updated
 */
addDecorator(withKnobs);

addDecorator(withInfo({ info: { inline: false } }));

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
