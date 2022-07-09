import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useMemo } from 'react';
import {
  addProduct,
  incrementProduct,
  decrementProduct,
  removeProduct,
} from '../../store/modules/Cart/Cart.store';

import { formatPrice } from '@utils/formatPrice';
import * as Styled from './styles';
import { CloseIcon } from '@components/icons/Close/MaterialSymbolsCloseRounded';
import IcRoundPlus from '@components/icons/Plus/IcRoundPlus';
import IcRoundMinus from '@components/icons/Minus/IcRoundMinus';

export type TestProps = {
  title?: string;
};

export const Test = ({ title }: TestProps): JSX.Element => {
  const { productsList: products } = useSelector(
    (state: RootState) => state.cart,
  );
  const dispatch = useDispatch();

  console.log('products', products);

  const total = (products: any) => {
    return products.reduce((totalPrice: number, product: any) => {
      return totalPrice + product.price * product.amount;
    }, 0);
  };

  const addedProductFn = useCallback(
    (product?: any) => {
      dispatch(
        addProduct({
          product: {
            id: '2',
            price: 10,
            amount: 1,
            stock: 8,
            image: {
              url: '',
              alt: 'aaa',
            },
            name: 'tenis 2',
          },
        }),
      );
    },
    [dispatch],
  );

  const decrementFn = useCallback(
    (id: string) => {
      dispatch(decrementProduct({ id }));
    },
    [dispatch],
  );

  const incrementFn = useCallback(
    (id: string) => {
      dispatch(incrementProduct({ id }));
    },
    [dispatch],
  );

  const deleteFn = useCallback(
    (id: string) => {
      dispatch(removeProduct({ id }));
    },
    [dispatch],
  );

  return (
    <Styled.Wrapper>
      <div className="adicionar">
        <h2>Adicionar produto mock:</h2>
        <button className="button" onClick={() => addedProductFn()}>
          Add product
        </button>
      </div>
      <ul>
        {products.length > 0 &&
          products.map((product) => {
            return (
              <li key={product.id}>
                <div>
                  <h2>Name: {product.name}</h2>
                  <span>Price: {formatPrice(product.price)}</span>

                  <div className="amount">
                    <span>Amount: </span>
                    <button
                      className="button__decrement"
                      onClick={() => {
                        decrementFn(product.id);
                      }}
                    >
                      <IcRoundMinus />
                    </button>
                    <span>{product.amount}</span>

                    <button
                      className="button__increment"
                      onClick={() => incrementFn(product.id)}
                    >
                      <IcRoundPlus />
                    </button>
                  </div>
                  <span>
                    SubTotal: {formatPrice(product.price * product.amount)}
                  </span>

                  <button
                    className=" button__delete"
                    onClick={() => deleteFn(product.id)}
                  >
                    <CloseIcon />
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
      <div className="adicionar price__result">
        <span>total:</span>
        <strong>{formatPrice(total(products))}</strong>
      </div>
    </Styled.Wrapper>
  );
};
