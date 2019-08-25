import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import State from '.';

describe('components', () => {
  describe('State', () => {
    it('passes down state to children', () => {
      let initialState = {
        text: 'some text',
      };

      let { getByText } = render(
        <State initialState={initialState}>
          {({ state: { text } }) => <p>{text}</p>}
        </State>
      );

      let text = getByText(initialState.text);

      expect(text).toHaveTextContent(initialState.text);
    });

    it('updates state with child function setState', () => {
      let initialState = {
        text: 'some text',
      };

      let buttonText = 'some button';

      let newText = 'some new text';

      let { getByText } = render(
        <State initialState={initialState}>
          {({ state: { text }, setState }) => (
            <>
              <p>{text}</p>
              <button onClick={() => setState({ text: newText })}>
                {buttonText}
              </button>
            </>
          )}
        </State>
      );

      let text = getByText(initialState.text);

      expect(text).toHaveTextContent(initialState.text);

      let button = getByText(buttonText);

      fireEvent.click(button);

      expect(text).toHaveTextContent(newText);
    });
  });
});
