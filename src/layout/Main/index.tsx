import { ReactNode } from 'react';

import { HeaderMock } from '@mock/components/header/headerMock';
import { Header } from 'src/layout/Header';
import * as Styled from './styles';

export type MainProps = {
  children: ReactNode;
};

export const Main = ({ children }: MainProps): JSX.Element => {
  return (
    <>
      <Header {...HeaderMock} />
      <Styled.Main>{children}</Styled.Main>
      {/*  Footer */}
    </>
  );
};
