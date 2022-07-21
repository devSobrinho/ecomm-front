import { Text } from '@components/Text';
import { FormEventHandler } from 'react';
import { ReactNode } from 'react';
import * as Styled from './styles';

export type FormProps = {
  method?: 'GET' | 'POST';
  title?: string;
  children: ReactNode;
  handleFormSubmit: FormEventHandler<HTMLFormElement>;
  name?: string;
  action?: string;
};

export const Form = ({
  title,
  method,
  handleFormSubmit,
  children,
  name,
  action,
}: FormProps): JSX.Element => {
  return (
    <Styled.Form
      action={action}
      name={name}
      method={method}
      onSubmit={handleFormSubmit}
    >
      {title && (
        <Text as="h2" text={title} type={'title-alternative'} isUpperCase />
      )}
      {children}
    </Styled.Form>
  );
};
