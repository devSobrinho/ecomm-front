import Image from 'next/image';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

import {
  removeProduct,
  closeModalCart,
} from '../../store/modules/Cart/Cart.store';
import { RootState } from '../../store/';
import { MyModal } from '@components/Modal';
import { CloseIcon } from '@components/icons/Close/MaterialSymbolsCloseRounded';
import { formatPrice } from '@utils/formatPrice';

import { Text } from '@components/Text';
import { InputWithButton } from '@components/Input/InputWithButton';
// import { Form } from '@components/Form';
import * as Styled from './styles';
import { InputSubmit } from '@components/Input/InputSubmit';
import { AmountProduct } from '@components/AmountProduct';

// const schema = yup.object({
//   product:
// }).required();

export const ModalCart = (): JSX.Element => {
  const { productsList } = useSelector((state: RootState) => state).cart;
  const dispatch = useDispatch();
  // const {} = useForm({
  //   resolver: yupResolver,
  // });

  const subTotal = () => {
    return productsList.reduce((acc, product) => {
      return acc + product.currentValue * product.amount;
    }, 0);
  };

  const total = (fee: number) => {
    return subTotal() + fee;
  };

  const handleClickDeleteProduct = useCallback(
    (id: string) => {
      dispatch(removeProduct({ id }));
    },
    [dispatch],
  );

  return (
    <MyModal ariaLabel="modal of cart" paddingModal="3rem 7rem">
      <Styled.Wrapper>
        <div className="closeModal" onClick={() => dispatch(closeModalCart())}>
          <CloseIcon fontSize={25} />
        </div>
        <div className="gridList">
          <Text as="span" type="logo-link" text="product" isUpperCase />
          <Text as="span" type="logo-link" text="price" isUpperCase />
          <Text as="span" type="logo-link" text="qty" isUpperCase />
          <Text as="span" type="logo-link" text="unit price" isUpperCase />
        </div>
        {productsList.length > 0 && (
          <ul className="products">
            {productsList.map((product) => {
              return (
                <li key={product.id} className="gridList">
                  <div className="contentProduct">
                    <button
                      className="buttonRemoveProduct"
                      onClick={() => handleClickDeleteProduct(product.id)}
                    >
                      <CloseIcon fontSize="20" />
                    </button>
                    {product.images[0]?.images[0]?.image?.url ? (
                      <Image
                        key={product.images[0].id}
                        width={138}
                        height={94}
                        src={product.images[0].images[0]?.image?.url}
                        alt={product.images[0]?.images[0]?.alt}
                      />
                    ) : (
                      <Image
                        width={138}
                        height={94}
                        src={'/assets/images/not image.png'}
                        style={{ opacity: '0.5' }}
                        alt={'No product image'}
                      />
                    )}
                    <Text
                      as="h3"
                      text={product.title}
                      type={'title-alternative'}
                    />
                  </div>
                  <Text
                    as="strong"
                    text={`${formatPrice(
                      product.currentValue * product.amount,
                      'en-US',
                    )}`}
                    type={'title-alternative'}
                  />
                  <AmountProduct
                    amount={product.amount}
                    productId={product.id}
                  />

                  <Text
                    as="strong"
                    text={`${formatPrice(product.currentValue, 'en-US')}`}
                    type={'title-alternative'}
                  />
                </li>
              );
            })}
          </ul>
        )}

        <div className="containerCheck">
          <InputWithButton placeholder="Voucher code" textSubmit={'redeem'} />
          <div className="checkout">
            <div>
              <Text as="h3" text={'Subtotal'} type={'title-alternative'} />
              <Text
                as="span"
                text={`${formatPrice(subTotal())}`}
                type={'title-alternative'}
              />
            </div>
            <div>
              <Text as="h3" text={'Shipping fee'} type={'title-alternative'} />
              <Text as="span" text={'$20'} type={'title-alternative'} />
            </div>
            <div>
              <Text as="h3" text={'Coupon'} type={'title-alternative'} />
              <Text as="span" text={'No'} type={'title-alternative'} />
            </div>
            <div className="total">
              <Text as="h3" text={'TOTAL'} type={'title-alternative'} />
              <Text
                as="strong"
                text={`${formatPrice(total(20), 'en-US')}`}
                type={'title-alternative'}
              />
            </div>
            <InputSubmit text="Check out" />
          </div>
        </div>
      </Styled.Wrapper>
    </MyModal>
  );
};
