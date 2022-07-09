import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import { addProduct } from '../../store/modules/Wishlist/Wishlist.store';
import { addProduct as addProductCart } from '../../store/modules/Cart/Cart.store';
import { ProductCardWithRate } from '@services/types/product-types';
import { DiscountPrice } from '@utils/discountPrice';
import { Text, TextType } from '../../components/Text';
import { FavoriteIcon } from '@components/icons/Favorite';
import { CartIcon } from '@components/icons/Cart';
import { RootState } from '../../store';
import { InputButton } from '@components/Input/InputButton';
import { ReviewSummary } from '@components/Review';
import { PricesCard } from '../../components/PricesCard';
import * as Styled from './styles';

export type CardProps = {
  cardStyles: 'primary' | 'secondary' | 'alternative' | 'product' | 'page';
  typeText?: TextType;
  href: string;
  isCardList?: boolean;
  colors: string[];
} & ProductCardWithRate;

export const Card = ({ ...props }: CardProps): JSX.Element => {
  const dispatch = useDispatch();
  const { productsList } = useSelector((state: RootState) => state.wishList);
  const { productsList: productsCart } = useSelector(
    (state: RootState) => state.cart,
  );
  const [hoverCardVisibility, setHoverCardVisibility] = useState(false);

  const discountPrice = DiscountPrice(props.currentValue, props.previousValue);

  const handleClickCart = useCallback(() => {
    dispatch(
      addProductCart({
        product: {
          id: props.id,
          stock: props.stock,
          name: props.title,
          price: props.currentValue,
          image: props.img,
          amount: 1,
          color: props.colors[0],
        },
      }),
    );
  }, [
    dispatch,
    props.colors,
    props.currentValue,
    props.id,
    props.img,
    props.stock,
    props.title,
  ]);

  const handleClickWishList = useCallback(() => {
    dispatch(
      addProduct({
        product: {
          id: props.id,
          stock: props.stock,
          name: props.title,
          image: props.img,
          price: props.currentValue,
          color: props.colors[0],
        },
      }),
    );
  }, [
    dispatch,
    props.colors,
    props.currentValue,
    props.id,
    props.img,
    props.stock,
    props.title,
  ]);

  return (
    <Styled.Wrapper
      cardStyles={props.cardStyles}
      isProductHover={hoverCardVisibility}
      isCardList={props.isCardList}
      onMouseOver={() => setHoverCardVisibility(true)}
      onMouseOut={() => setHoverCardVisibility(false)}
    >
      <div className="card-image">
        <Link href={`${props.href}`} passHref>
          <a>
            <Image
              width={408}
              height={357}
              src={props.img.url}
              alt={props.img?.alt ?? ''}
            />
          </a>
        </Link>
        {hoverCardVisibility &&
          !props.isCardList &&
          props.cardStyles === 'product' && (
            <div className="card-hover">
              <InputButton
                onClick={handleClickWishList}
                styles="primary"
                icon={
                  <FavoriteIcon
                    isActive={
                      !!productsList.find(
                        (productStore) => productStore.id === props.id,
                      )
                    }
                  />
                }
              />
              <InputButton
                onClick={handleClickCart}
                styles="primary"
                icon={
                  <CartIcon
                    amount={
                      productsCart.find(
                        (productStore) => productStore.id === props.id,
                      )?.amount
                    }
                    isActive={
                      !!productsCart.find(
                        (productStore) => productStore.id === props.id,
                      )
                    }
                  />
                }
              />
            </div>
          )}
      </div>

      <div className="card-content">
        <Link href={`${props.href}`} passHref>
          <a>
            <Text as="h4" type="title-card" text={props.title} />
          </a>
        </Link>
        <ReviewSummary
          productId={props.id}
          rate={props.rate ?? 0}
          isCardList={props.isCardList}
          reviewsCount={props.reviewsCount ?? 0}
        />
        <PricesCard
          isCardList={props.isCardList}
          currentValue={props.currentValue}
          discountPrice={discountPrice}
          previousValue={props.previousValue}
        />

        {props.isCardList && (
          <>
            {props.description && (
              <div className="card-description">
                <Text
                  type="text-card"
                  as="p"
                  text={props.description}
                  isCapitalize
                />
              </div>
            )}

            <div className="card-buttons">
              <InputButton
                onClick={handleClickCart}
                styles="primary"
                icon={
                  <CartIcon
                    amount={
                      productsCart.find(
                        (productStore) => productStore.id === props.id,
                      )?.amount
                    }
                    isActive={
                      !!productsCart.find(
                        (productStore) => productStore.id === props.id,
                      )
                    }
                  />
                }
                text={'Add To Cart'}
              />
              <InputButton
                onClick={handleClickWishList}
                styles="primary"
                icon={
                  <FavoriteIcon
                    isActive={
                      !!productsList.find(
                        (productStore) => productStore.id === props.id,
                      )
                    }
                  />
                }
              />
            </div>
          </>
        )}
      </div>
    </Styled.Wrapper>
  );
};
