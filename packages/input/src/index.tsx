import React, { Fragment, FC, useState, FormEvent } from 'react';
import { onEvent, joinStyles } from '@react-design-system/utils';

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
  type?:
    | 'text'
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  classNames?: {
    label?: string;
    input?: string;
  };
  testIds?: { label?: string; input?: string };
  autoComplete?: boolean;
  disabled?: boolean;
  list?: string;
  placeholder?: string;
  readOnly?: boolean;
  min?: number | Date;
  max?: number | Date;
  // for type="checkbox" only
  checked?: boolean;
  // for type="images" only
  multiple?: boolean;
  alt?: string;
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
  classNames: { label: labelClassName = '', input: inputClassName = '' } = {
    label: '',
    input: '',
  },
  testIds: { label: labelTestId = 'label', input: inputTestId = 'input' } = {
    label: 'label',
    input: 'input',
  },
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
      <label
        htmlFor={name}
        className={joinStyles('Input__label', labelClassName)}
        data-testid={labelTestId}
      >
        <span>
          {required ? `*${label}` : label}{' '}
          {hasError && <span className="Input__error">{onError}</span>}
        </span>
        <input
          data-testid={inputTestId}
          id={name}
          name={name}
          onChange={onChange}
          value={safeValue}
          required={required}
          onInvalid={onInvalid}
          onBlur={onBlur}
          type={type}
          pattern={pattern}
          className={joinStyles('Input__input', inputClassName)}
        />
      </label>
    </Fragment>
  );
};

export default Input;
