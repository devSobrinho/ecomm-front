import { Text } from '@components/Text';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEvent, useEffect, useRef } from 'react';
import * as Styled from './styles';

export type FilterOrderProductProps = {
  orders: {
    name: string;
    options: string[];
  }[];
};

export const FilterOrderProduct = ({
  ...props
}: FilterOrderProductProps): JSX.Element => {
  const { query, push, pathname } = useRouter();

  function handleClickOption(e: MouseEvent<HTMLSelectElement>) {
    //ROTA QUERY
    const queryName = e.currentTarget?.id;
    const queryValue = e.currentTarget?.value;

    if (!queryName && !queryValue) return;
    if (query[queryName]?.includes(queryValue)) return;

    query[queryName] = queryValue;

    push({ pathname, query });
    return;
  }

  return (
    <Styled.WrapperOrder>
      {props.orders.map((order, index) => {
        return (
          <Styled.OrderFilterProduct key={order.name + '-' + index}>
            <Text text={order.name} type="logo-title" as="span" isCapitalize />
            <select
              name={order.name}
              id={order.name}
              onClick={handleClickOption}
            >
              {order.options.map((option, indexOption) => {
                return (
                  <option key={option + '-' + indexOption} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </Styled.OrderFilterProduct>
        );
      })}
    </Styled.WrapperOrder>
  );
};
