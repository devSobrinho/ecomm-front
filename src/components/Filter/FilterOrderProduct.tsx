import { useRouter } from 'next/router';
import { MouseEvent, useCallback } from 'react';

import { Text } from '@components/Text';
import * as Styled from './styles';

type Orders = {
  name: string;
  options: string[];
  defaultOption?: string;
};

export type FilterOrderProductProps = {
  orders: Orders[];
  isStyles?: boolean;
  className?: string;
};

export const FilterOrderProduct = ({
  ...props
}: FilterOrderProductProps): JSX.Element => {
  const { query, push, pathname } = useRouter();

  const handleClickOption = useCallback(
    (e: MouseEvent<HTMLSelectElement>) => {
      //ROTA QUERY
      const queryName = e.currentTarget?.id;
      const queryValue = e.currentTarget?.value;

      if (!queryName) return;
      //delete queryParam
      if (queryValue == '') {
        delete query[queryName];

        push({ pathname, query });
        return;
      }
      if (query[queryName]?.includes(queryValue)) return;

      query[queryName] = queryValue;

      push({ pathname, query });
      return;
    },
    [pathname, push, query],
  );

  return (
    <Styled.WrapperOrder isStyles={props.isStyles} className={props.className}>
      {props.orders.map((order, index) => {
        return (
          <Styled.OrderFilterProduct key={order.name + '-' + index}>
            <Text text={order.name} type="logo-title" as="span" isCapitalize />
            <select
              name={order.name}
              id={order.name}
              onClick={handleClickOption}
              // defaultValue={
              //   query[order.name] ? query[order.name] : order.defaultOption
              // }
            >
              <option value={query[order.name]}>
                {query[order.name] ?? order.defaultOption}
              </option>
              {/* {order.options.map((option, indexOption) => {
                if (option === query[order.name]) {
                  console.log('entrou kkkk');

                  return (
                    <option value={option} key={option + '--' + indexOption}>
                      {option}
                    </option>
                  );
                }
                return;
              })} */}

              {order.options.map((option, indexOption) => {
                if (option === query[order.name]) return;
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
