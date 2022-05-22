import { useState } from 'react';
import { Card } from '@components/Card';
import { FilterOrderProduct } from '@components/Filter/FilterOrderProduct';
import { GridProducts } from '@components/GridProducts';
import { SwitchOrders } from '@components/SwitchOrders';
import { ProductCardWithRate } from '@services/types/product-types';

import * as Styled from './styles';

type ProductListProps = {
  products: ProductCardWithRate[];
};

export const ProductList = ({ products }: ProductListProps): JSX.Element => {
  const [orderSwitchGrid, setOrderSwitchGrid] = useState(true);
  const [orderSwitchList, setOrderSwitchList] = useState(false);

  return (
    <Styled.Wrapper isSwitchGrid={orderSwitchGrid}>
      <Styled.Orders>
        <FilterOrderProduct
          orders={[
            { name: 'Sort By', options: ['name', 'price', 'destaque'] },
            { name: 'Show', options: ['9', '12', '15'] },
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
        {products?.map((product) => {
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
    </Styled.Wrapper>
  );
};
