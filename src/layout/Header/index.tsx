import { IHeader } from '@services/types/header-types';
import { Logo } from '../../components/Logo';
import { Menu, MenuLink } from '../../components/Menu';
import * as Styled from './styles';
import { useCallback, useEffect, useState } from 'react';
import { SubMenu } from '../../components/SubMenu';

type HeaderProps = IHeader;

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  const [idCategoryHover, setIdCategoryHover] = useState('');

  const isMouseOver = useCallback(async (id: string) => {
    setIdCategoryHover(id);
  }, []);

  useEffect(() => {
    console.log('idCategoryHover', idCategoryHover);
  }, [idCategoryHover]);

  return (
    <Styled.Header>
      <Logo text={props.logo.text} url={props.logo.url} alt={props.logo.alt} />

      <Menu>
        <>
          {props.menu.map((link) => {
            const name = link.name.toLowerCase();
            return (
              <MenuLink
                onMouseOver={async () => {
                  await isMouseOver(link.id);
                }}
                name={name}
                key={link.id}
              />
            );
          })}
        </>
      </Menu>

      {idCategoryHover && (
        <>
          <Styled.SubCategoriesOut
            onMouseOver={() => setIdCategoryHover('')}
          ></Styled.SubCategoriesOut>
          <Styled.SubCategoriesHover onMouseOver={() => console.log('aaaaa')}>
            <Styled.SubCategories>
              {props.menu.map((f) => {
                if (f.id === idCategoryHover) {
                  return (
                    <SubMenu
                      key={f.id}
                      id={f.id}
                      categories={f.categories}
                      name={f.name}
                    />
                  );
                }
              })}
            </Styled.SubCategories>
          </Styled.SubCategoriesHover>
        </>
      )}
    </Styled.Header>
  );
};
