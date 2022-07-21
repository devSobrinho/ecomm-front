import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import { addProduct } from '../../store/modules/Wishlist/Wishlist.store';
import { addProduct as addProductCart } from '../../store/modules/Cart/Cart.store';
import { Color, IProduct } from '@services/types/product-types';
import { DiscountPrice } from '@utils/discountPrice';
import { Text, TextType } from '../../components/Text';
import { FavoriteIcon } from '@components/icons/Favorite';
import { CartIcon } from '@components/icons/Cart';
import { RootState } from '../../store';
import { InputButton } from '@components/Input/InputButton';
import { ReviewSummary } from '@components/Review';
import { PricesCard } from '../../components/PricesCard';
import * as Styles from './styles';

export type CardProps = {
  cardStyles: 'primary' | 'secondary' | 'alternative' | 'product' | 'page';
  typeText?: TextType;
  href: string;
  isCardList?: boolean;
  // colors: Color[];
} & IProduct;

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
          title: props.title,
          currentValue: props.currentValue,
          previousValue: props.previousValue,
          images: props.images,
          colors: props.colors,
          description: props.description,
          amount: 1,
        },
      }),
    );
  }, [
    dispatch,
    props.colors,
    props.currentValue,
    props.description,
    props.id,
    props.images,
    props.previousValue,
    props.stock,
    props.title,
  ]);

  const handleClickWishList = useCallback(() => {
    dispatch(
      addProduct({
        product: {
          id: props.id,
          stock: props.stock,
          title: props.title,
          images: props.images,
          currentValue: props.currentValue,
          previousValue: props.previousValue,
          colors: props.colors,
          description: props.description,
        },
      }),
    );
  }, [
    dispatch,
    props.colors,
    props.currentValue,
    props.description,
    props.id,
    props.images,
    props.previousValue,
    props.stock,
    props.title,
  ]);
  console.log('props.images', props.images);

  return (
    <Styles.Wrapper
      cardStyles={props.cardStyles}
      isProductHover={hoverCardVisibility}
      isCardList={props.isCardList}
      onMouseOver={() => setHoverCardVisibility(true)}
      onMouseOut={() => setHoverCardVisibility(false)}
    >
      <div className="card-image">
        <Link href={`${props.href}`} passHref>
          <a>
            {props.images && props.images[0]?.images[0]?.image?.url ? (
              <Image
                key={props.images[0].id}
                width={408}
                height={357}
                src={props.images[0].images[0]?.image?.url}
                alt={props.images[0]?.images[0]?.alt}
              />
            ) : (
              <Image
                width={408}
                height={357}
                src={'/assets/images/not image.png'}
                style={{ opacity: '0.5' }}
                alt={'No product image'}
              />
            )}
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
        {/* <ReviewSummary
          productId={props.id}
          rate={props.rate ?? 0}
          isCardList={props.isCardList}
          reviewsCount={props.reviewsCount ?? 0}
        /> */}
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
                <Text type="text-card" as="p" text={props.description} />
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
    </Styles.Wrapper>
  );
};
