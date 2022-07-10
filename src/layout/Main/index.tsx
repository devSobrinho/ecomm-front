import { ReactNode, useEffect, useState } from 'react';

import { HeaderMock } from '@mock/components/header/headerMock';
import { Header } from 'src/layout/Header';
import { ModalCart } from '../ModalCart';
import * as Styled from './styles';
import { loadCategoriesAndSubCategories } from '@services/api/api';

export type MainProps = {
  children: ReactNode;
};

export const Main = ({ children }: MainProps): JSX.Element => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    async function exec() {
      const response = await loadCategoriesAndSubCategories();
      setMenu(response);
    }
    exec();
  }, []);

  return (
    <>
      {/* <Header {...HeaderMock} /> */}
      <Header {...HeaderMock} menu={menu} />
      <ModalCart />

      <Styled.Main>{children}</Styled.Main>
      {/*  Footer */}
    </>
  );
};
