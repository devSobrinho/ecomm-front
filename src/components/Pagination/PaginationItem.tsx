import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useState } from 'react';

import * as Styled from './styles';

export type PaginationItemProps = {
  title?: string;
  page: number;
  currentPage: number;
  pathname: string;
  query: ParsedUrlQuery;
};

export const PaginationItem = ({
  query,
  pathname,
  page,
  currentPage,
}: PaginationItemProps): JSX.Element => {
  return (
    <Link
      href={{
        pathname,
        query: {
          ...query,
          page,
        },
      }}
    >
      <Styled.PaginationButton isActive={page === currentPage}>
        {page}
      </Styled.PaginationButton>
    </Link>
  );
};
