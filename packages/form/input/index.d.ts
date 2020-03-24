import { FC } from 'react';
declare type InputReturnValue = {
  [key: string]: string;
};
declare type InputEventFn = (value: InputReturnValue) => void;
declare type OnErrorFunction = (value: InputReturnValue) => string;
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
  testIds?: {
    label?: string;
    input?: string;
  };
  autoComplete?: boolean;
  disabled?: boolean;
  list?: string;
  placeholder?: string;
  readOnly?: boolean;
  min?: number | Date;
  max?: number | Date;
  checked?: boolean;
  multiple?: boolean;
  alt?: string;
}
declare let Input: FC<InputProps>;
export default Input;
