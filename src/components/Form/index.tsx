import { Text } from '@components/Text';
import { FormEventHandler } from 'react';
import { ReactNode } from 'react';
import * as Styled from './styles';

export type FormProps = {
  method?: 'GET' | 'POST';
  title?: string;
  children: ReactNode;
  handleFormSubmit: FormEventHandler<HTMLFormElement>;
};

export const Form = ({
  title,
  method,
  handleFormSubmit,
  children,
}: FormProps): JSX.Element => {
  return (
    <Styled.Form method={method} onSubmit={handleFormSubmit}>
      <Text as="h2" text={title} type={'title-alternative'} isUpperCase />
      {children}
    </Styled.Form>
  );
};
