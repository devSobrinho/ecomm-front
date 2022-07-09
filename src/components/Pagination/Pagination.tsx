import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { newArray } from '@utils/newArray';
import * as Styled from './styles';
import { PaginationItem } from './PaginationItem';

export type PaginationProps = {
  currentPage: number;
  perPage: number;
  count: number;
};

const siblingsCount = 2;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export const Pagination = ({
  perPage,
  count,
  currentPage,
}: PaginationProps): JSX.Element => {
  const { pathname, query } = useRouter();
  const [pages, setPages] = useState<number[]>([]);
  const lastPage = Math.ceil(count / perPage);

  useEffect(() => {
    const pagesArray = newArray(lastPage).map((page) => page + 1);
    setPages(pagesArray);
  }, [perPage, count]);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : [];

  if (pages.length > 5) {
    return (
      <Styled.Pagination>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem
              page={1}
              currentPage={currentPage}
              pathname={pathname}
              query={query}
            />
            {currentPage > 2 + siblingsCount && <span>...</span>}
          </>
        )}
        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                page={page}
                currentPage={currentPage}
                pathname={pathname}
                query={query}
              />
            );
          })}
        <PaginationItem
          page={pages[currentPage - 1]}
          currentPage={currentPage}
          pathname={pathname}
          query={query}
        />
        {nextPages.length > 0 &&
          nextPages.map((page) => {
            console.log('pagepagepagepage', page);

            return (
              <PaginationItem
                key={page}
                page={page}
                currentPage={currentPage}
                pathname={pathname}
                query={query}
              />
            );
          })}
        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + siblingsCount + 1 < lastPage && <span>...</span>}
            <PaginationItem
              page={pages[pages.length - 1]}
              currentPage={pages.length - 1}
              pathname={pathname}
              query={query}
            />
          </>
        )}
      </Styled.Pagination>
    );
  }

  return (
    <Styled.Pagination>
      {pages.length > 0 &&
        pages?.map((page) => {
          return (
            <PaginationItem
              key={page}
              page={page}
              currentPage={currentPage}
              pathname={pathname}
              query={query}
            />
          );
        })}
    </Styled.Pagination>
  );
};
