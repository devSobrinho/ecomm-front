import { Text } from '@components/Text';
import { HTMLInputTypeAttribute, useState } from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import * as Styled from './styles';

export type InputProps = {
  name: string;
  type: HTMLInputTypeAttribute;
  title?: string;
  error?: FieldError;
  icon?: JSX.Element;
  placeholder?: string;
  errorTimeOut?: number;
  iconRight?: boolean;
};

const InputForward: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error, icon, errorTimeOut, type, placeholder, iconRight, ...rest },
  ref,
): JSX.Element => {
  const [inputFocus, setInputFocus] = useState(false);
  return (
    <Styled.FormControl
      errorTimeOut={errorTimeOut}
      isError={!!error}
      isIcon={!!icon}
      iconRight={iconRight}
    >
      {/* implmentar o label */}
      {/* <label htmlFor={name}></label> */}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />

      {icon}
      {error && (
        <Text as="span" type="error-message" text={error.message ?? 'error'} />
      )}
    </Styled.FormControl>
  );
};

export const Input = forwardRef(InputForward);
