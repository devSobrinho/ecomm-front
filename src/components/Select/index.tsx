import { useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import { Control, Controller, FieldValues } from 'react-hook-form';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import * as Styled from './styles';
import { Text } from '@components/Text';

interface IMultiSelectOption {
  name: string;
  code: string;
}

export type SelectProps = {
  multiSelectOptions: IMultiSelectOption[];
  name: string;
  control: Control<FieldValues, any>;
  title?: string;
  placeholder?: string;
};

export const Select = ({
  multiSelectOptions,
  title,
  placeholder,
  control,
  name,
}: SelectProps): JSX.Element => {
  return (
    <Styled.Wrapper>
      {title && <Text as="span" type="sub-text" text={title} />}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <MultiSelect
            id={field.name}
            value={field.value}
            options={multiSelectOptions}
            onChange={(e) => field.onChange(e.value)}
            optionLabel="name"
            placeholder={placeholder}
            filter
            className="multiselect-custom"
          />
        )}
      />
    </Styled.Wrapper>
  );
};
