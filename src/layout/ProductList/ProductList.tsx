import { useReducer, useState } from 'react';

import { Card } from 'src/layout/Card';
import { FilterOrderProduct } from '@components/Filter/FilterOrderProduct';
import { GridProducts } from '@components/GridProducts';
import { SwitchOrders } from '@components/SwitchOrders';
import { ProductCardWithRate } from '@services/types/product-types';
import { Pagination } from '@components/Pagination';
import * as Styled from './styles';

type ProductListProps = {
  products: ProductCardWithRate[];
  productsCount: number;
  perPage: number;
  count: number;
  currentPage: number;
};

export const ProductList = ({
  products,
  productsCount,
  perPage,
  count,
  currentPage,
}: ProductListProps): JSX.Element => {
  const [orderSwitchGrid, setOrderSwitchGrid] = useState(true);
  const [orderSwitchList, setOrderSwitchList] = useState(false);

  return (
    <Styled.Wrapper isSwitchGrid={orderSwitchGrid}>
      <Styled.Orders>
        <FilterOrderProduct
          orders={[
            {
              name: 'Sort By',
              options: [
                '',
                'name: asc',
                'name: desc',
                'price: asc',
                'price: desc',
                'deals: asc',
                'deals: desc',
                'order: asc',
                'order: desc',
              ],
              defaultOption: '',
            },
            { name: 'Show', options: ['9', '12', '15'], defaultOption: '12' },
          ]}
        />
        <div>
          <SwitchOrders
            orderSwitchGrid={orderSwitchGrid}
            orderSwitchList={orderSwitchList}
            onClickOrderGrid={() => {
              setOrderSwitchGrid(true);
              setOrderSwitchList(false);
            }}
            onClickOrderList={() => {
              setOrderSwitchGrid(false);
              setOrderSwitchList(true);
            }}
          />
        </div>
      </Styled.Orders>
      <GridProducts>
        {products?.map((product, index) => {
          console.log('produrata', product);

          return (
            <Card
              key={product.id}
              cardStyles="product"
              typeText="title-card"
              href={`product/${product.id}`}
              rate={product.rate}
              isCardList={orderSwitchList}
              {...product}
            />
          );
        })}
      </GridProducts>

      <Pagination perPage={perPage} count={count} currentPage={currentPage} />
    </Styled.Wrapper>
  );
};
