import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  decrementProduct,
  incrementProduct,
} from '../../store/modules/Cart/Cart.store';
import { Text } from '@components/Text';
import IcRoundMinus from '@components/icons/Minus/IcRoundMinus';
import IcRoundPlus from '@components/icons/Plus/IcRoundPlus';
import * as Styled from './styles';

export type AmountProductProps = {
  productId: string;
  amount: number;
};

export const AmountProduct = ({
  productId,
  amount,
}: AmountProductProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleClickDecrementProduct = useCallback(
    (id: string) => {
      dispatch(decrementProduct({ id }));
    },
    [dispatch],
  );

  const handleClickIncrementProduct = useCallback(
    (id: string) => {
      dispatch(incrementProduct({ id }));
    },
    [dispatch],
  );

  return (
    <Styled.Wrapper>
      <button
        className="decrementButton"
        onClick={() => {
          handleClickDecrementProduct(productId);
        }}
      >
        <IcRoundMinus fontSize="20" />
      </button>
      <Text as="span" text={`${amount}`} type={'title-alternative'} />
      <button
        className="incrementButton"
        onClick={() => handleClickIncrementProduct(productId)}
      >
        <IcRoundPlus fontSize="20" />
      </button>
    </Styled.Wrapper>
  );
};
