import { HTMLInputTypeAttribute } from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError, FieldValues, UseFormSetValue } from 'react-hook-form';

import { Text } from '@components/Text';
import { Images } from '@components/Images';
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
  label?: string;
  max?: number | string;
  min?: number | string;
  multiple?: boolean;
  accept?: string;
  files?: FileList;
  defaultValue?: string | number;
  setFiles?: UseFormSetValue<FieldValues>;
};

const InputForward: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    error,
    icon,
    errorTimeOut,
    type,
    placeholder,
    iconRight,
    max,
    min,
    multiple,
    accept,
    files,
    setFiles,
    defaultValue,
    ...rest
  },
  ref,
): JSX.Element => {
  return (
    <Styled.FormControl
      errorTimeOut={errorTimeOut}
      isError={!!error}
      isIcon={!!icon}
      iconRight={iconRight}
    >
      {label && <Text as="label" type="sub-text" text={label} />}
      {type === 'file' && (
        <label htmlFor={name} className="inputFile">
          Choose Files
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        max={max}
        min={min}
        multiple={multiple}
        accept={accept}
        defaultValue={defaultValue}
        ref={ref}
        {...rest}
      />

      {icon}
      {error && (
        <Text as="span" type="error-message" text={error.message ?? 'error'} />
      )}

      {files && Object.values(files).length > 0 && name && (
        <Images
          files={files}
          name={name}
          setFiles={setFiles}
          height={200}
          width={200}
          errors={error}
        />
      )}
    </Styled.FormControl>
  );
};

export const Input = forwardRef(InputForward);
