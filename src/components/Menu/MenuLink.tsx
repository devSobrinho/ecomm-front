import { IMenu } from '@services/types/header-types';
import { useRouter } from 'next/router';
import { MouseEvent, useState } from 'react';

import { MenuActiveLink } from './MenuActiveLink';
import * as Styled from './styles';

export type MenuLinkProps = {
  onMouseOver: () => Promise<void>;
} & Pick<IMenu, 'name'>;

export default function MenuLink({ onMouseOver, name }: MenuLinkProps) {
  const { query } = useRouter();

  const handleClickToRedirect = (e: MouseEvent<HTMLAnchorElement>) => {
    const isQueryEqualName = query?.category === name;
    isQueryEqualName ? e.preventDefault() : null;
  };

  return (
    <Styled.Link onMouseOver={onMouseOver}>
      <MenuActiveLink
        href={{
          pathname: '/c',
          query: { category: name },
        }}
        passHref
        shouldMatchExactHref
      >
        <a onClick={handleClickToRedirect}>{name}</a>
      </MenuActiveLink>
    </Styled.Link>
  );
}
