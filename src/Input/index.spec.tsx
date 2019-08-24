import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './';
import State from '../utils/State';

describe('components', () => {
  describe('Input', () => {
    it('calls onChange with the name and value object', () => {
      let label = 'some label';
      let name = 'some name';
      let value = 'some value';
      let onChange = jest.fn();

      let { getByLabelText } = render(
        <Input label={label} name={name} onChange={onChange} value="" />
      );

      let input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(onChange).toHaveBeenCalledWith({ [name]: value });
    });

    it('displays a label', () => {
      let label = 'some label';
      let onChange = jest.fn();

      let { getByText } = render(
        <Input label={label} name={name} onChange={onChange} value="" />
      );

      expect(getByText(label)).toHaveTextContent(label);
    });

    describe('required', () => {
      it('displays error when blurred and blank', () => {
        let label = 'some label';
        let name = 'some name';
        let onChange = jest.fn();

        let { getByLabelText, getByText } = render(
          <Input
            label={label}
            name={name}
            onChange={onChange}
            value=""
            required
          />
        );

        let input = getByLabelText(label);

        fireEvent.blur(input);

        expect(getByText('Required')).toBeInTheDocument();
      });
    });

    describe('hasError', () => {
      it('removes error if has value onBlur', () => {
        let label = 'some label';
        let name = 'some name';
        let value = 'some value';

        let { getByLabelText, getByText } = render(
          <State initialState={{ [name]: '' }}>
            {({ state, setState }) => {
              return (
                <Input
                  label={label}
                  name={name}
                  onChange={setState}
                  value={state[name]}
                  required
                />
              );
            }}
          </State>
        );

        let input = getByLabelText(label);

        fireEvent.blur(input);

        let errorMessage = getByText('Required');

        expect(errorMessage).toBeInTheDocument();

        fireEvent.change(input, {
          target: { value },
        });

        expect(input).toBeValid();
        expect(input).toHaveValue(value);

        fireEvent.blur(input);

        expect(errorMessage).not.toBeInTheDocument();
      });

      it('removes error onChange with valid value', () => {
        let label = 'some label';
        let name = 'some name';
        let value = 'some value';

        let { getByLabelText, getByText } = render(
          <State initialState={{ [name]: '' }}>
            {({ state, setState }) => {
              return (
                <Input
                  label={label}
                  name={name}
                  onChange={setState}
                  value={state[name]}
                  required
                />
              );
            }}
          </State>
        );

        let input = getByLabelText(label);

        fireEvent.blur(input);

        let errorMessage = getByText('Required');

        expect(errorMessage).toBeInTheDocument();

        fireEvent.change(input, {
          target: { value },
        });

        expect(input).toBeValid();
        expect(input).toHaveValue(value);

        expect(errorMessage).not.toBeInTheDocument();
      });
    });

    describe('pattern', () => {
      it('validates against a pattern regex', () => {
        let label = 'some label';
        let name = 'some name';
        let validValue = '@fake.com';
        let pattern = '.*@fake.com$';

        let { getByLabelText, getByText } = render(
          <State initialState={{ [name]: '' }}>
            {({ state, setState }) => {
              return (
                <Input
                  label={label}
                  name={name}
                  onChange={setState}
                  value={state[name]}
                  required
                  pattern={pattern}
                />
              );
            }}
          </State>
        );

        let input = getByLabelText(label);

        fireEvent.blur(input);

        let errorMessage = getByText('Required');

        expect(errorMessage).toBeInTheDocument();

        fireEvent.change(input, { target: { value: validValue } });

        expect(errorMessage).not.toBeInTheDocument();
      });
    });

    describe('onBlur', () => {
      it('calls onBlur with name and value object', () => {
        let label = 'some label';
        let name = 'some name';
        let value = 'some value';
        let onChange = jest.fn();
        let onBlur = jest.fn();

        let { getByLabelText } = render(
          <Input
            label={label}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            required
          />
        );

        let input = getByLabelText(label);

        fireEvent.blur(input);

        expect(onBlur).toHaveBeenCalledWith({ [name]: value });
      });
    });

    describe('onError', () => {
      it('calls onError with value if a function is passed', () => {
        let label = 'some label';
        let name = 'some name';
        let value = '';
        let onChange = jest.fn();
        let onError = jest.fn(() => 'Required');

        let { getByLabelText } = render(
          <Input
            label={label}
            name={name}
            onChange={onChange}
            onError={onError}
            value={value}
            required
          />
        );

        let input = getByLabelText(label);

        fireEvent.blur(input);

        expect(onError).toHaveBeenCalledWith({ [name]: value });
      });

      it('returns onError as string is if string passed', () => {
        let label = 'some label';
        let name = 'some name';
        let value = '';
        let onChange = jest.fn();
        let onError = 'some onError';

        let { getByLabelText, getByText } = render(
          <Input
            label={label}
            name={name}
            onChange={onChange}
            onError={onError}
            value={value}
            required
          />
        );

        let input = getByLabelText(label);

        fireEvent.blur(input);

        let errorMessage = getByText(onError);

        expect(errorMessage).toHaveTextContent(onError);
      });
    });
  });
});
