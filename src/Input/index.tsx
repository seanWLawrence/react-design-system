import React, { Fragment, FC, useState, FormEvent } from 'react';

import { withTheme } from 'emotion-theming';

import { onEvent } from '../utils';

import '../utils/theme.css';
import './index.css';

type InputReturnValue = { [key: string]: string };
type InputEventFn = (value: InputReturnValue) => void;
type OnErrorFunction = (value: InputReturnValue) => string;

type InputEventObj = FormEvent<HTMLInputElement> & {
  target: { checkValidity: () => boolean; value: string };
};

interface InputProps {
  name: string;
  onChange: InputEventFn;
  value: string | null;
  label: string;
  pattern?: string;
  required?: boolean;
  onBlur?: InputEventFn;
  onError?: OnErrorFunction | string;
  type?: 'text';
}

let Input: FC<InputProps> = ({
  label,
  name,
  onChange: onChangeProp,
  onBlur: onBlurProp = () => {},
  onError: onErrorProp = 'Required',
  value,
  required = false,
  type = 'text',
  pattern = undefined,
}) => {
  let [hasError, setHasError] = useState(false);

  let onInvalid = onEvent(() => setHasError(true));

  let onBlur = onEvent(() => {
    if (required) {
      value ? setHasError(false) : setHasError(true);
    }

    onBlurProp({ [name]: safeValue });
  });

  let onChange = ({ target: { value }, target }: InputEventObj) => {
    if (hasError && target.checkValidity()) {
      setHasError(false);
    }

    onChangeProp({ [name]: value });
  };

  let safeValue = (value !== null && value) || '';

  let onError =
    typeof onErrorProp === 'function'
      ? onErrorProp({ [name]: safeValue })
      : onErrorProp;

  return (
    <Fragment>
      <label htmlFor={name} className="Input__label">
        <span>
          {label} {hasError && <span className="Input__error">{onError}</span>}
        </span>
        <input
          id={name}
          name={name}
          onChange={onChange}
          value={safeValue}
          required={required}
          onInvalid={onInvalid}
          onBlur={onBlur}
          type={type}
          pattern={pattern}
          className="Input__input"
        />
      </label>
    </Fragment>
  );
};

export default withTheme(Input);
