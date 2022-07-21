import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useCallback, useEffect, useState } from 'react';

import {
  addProduct as addProductWishlist,
  removeProduct as removeProductWishlist,
} from '../../store/modules/Wishlist/Wishlist.store';
import {
  addProduct as addProductCart,
  removeProduct as removeProductCart,
} from '../../store/modules/Cart/Cart.store';
import { ProductCardWithRate } from '@services/types/product-types';
import { DiscountPrice } from '@utils/discountPrice';
import { Text, TextType } from '../../components/Text';
import { FavoriteIcon } from '@components/icons/Favorite';
import { CartIcon } from '@components/icons/Cart';
import { RootState, useAppDispatch } from '../../store';
import { InputButton } from '@components/Input/InputButton';
import { ReviewSummary } from '@components/Review';
import { PricesCard } from '../../components/PricesCard';
import { AmountProduct } from '@components/AmountProduct';
import mockProductPage from './mockProductPage.json';
import { Filter } from '@components/Filter';
import { FilterOrderProduct } from '@components/Filter/FilterOrderProduct';
import { TwitterIcon } from '@components/icons/Twitter';
import { FacebookIcon } from '@components/icons/Facebook';
import { CloseIcon } from '@components/icons/Close/MaterialSymbolsCloseRounded';
import { Carousel } from '@components/Carousel';
import * as Styled from './styles';
import { Carousel2 } from '@components/Carousel2';

export type ProductPageProps = {
  typeText?: TextType;
  href: string;
  children?: ReactNode;
  colors?: string[];
  sizes?: string[];
  images: any[];
} & ProductCardWithRate;

export const ProductPage = ({ ...props }: ProductPageProps): JSX.Element => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { productsList } = useSelector((state: RootState) => state.wishList);
  const { productsList: productsCart } = useSelector(
    (state: RootState) => state.cart,
  );

  const [title, setTitle] = useState('');
  const discountPrice = DiscountPrice(props.currentValue, props.previousValue);
  const colorsOptions = props.colors?.map((color) => {
    return {
      name: color,
      color,
    };
  });

  const productInCart = productsCart.find((product) => product.id === props.id);

  const imagesProductSelectedColor = props.images.filter((image) =>
    props.colors ? props.colors[image.idColor] === query.color : null,
  );
  const dispat = useAppDispatch();
  dispat(removeProductCart({ id: '23132323' }));

  // const sizes = props.sizes?.map(size => ({name: }))

  const handleClickCartAdd = useCallback(() => {
    dispatch(
      addProductCart({
        product: {
          id: props.id,
          stock: props.stock,
          name: props.title,
          price: props.currentValue,
          image: props.img,
          amount: 1,
        },
      }),
    );
  }, [
    dispatch,
    props.currentValue,
    props.id,
    props.img,
    props.stock,
    props.title,
  ]);

  const handleClickCartRemove = useCallback(() => {
    dispatch(removeProductCart({ id: props.id }));
  }, [dispatch, props.id]);

  const handleClickWishList = useCallback(() => {
    dispatch(
      addProductWishlist({
        product: {
          id: props.id,
          stock: props.stock,
          name: props.title,
          image: props.img,
          price: props.currentValue,
        },
      }),
    );
  }, [
    dispatch,
    props.currentValue,
    props.id,
    props.img,
    props.stock,
    props.title,
  ]);

  return (
    <Styled.Wrapper>
      <div className="card-image">
        <Carousel
          imagesProduct={
            query.color ? imagesProductSelectedColor : props.images
          }
        />
        {/* <Carousel2
          imagesProduct={[
            {
              url: 'https://loremflickr.com/1234/2345/fashion?56789',
              alt: '',
            },
            {
              url: 'https://loremflickr.com/600/600',
              alt: '',
            },
            {
              url: 'https://loremflickr.com/cache/resized/65535_51424338521_964fe5c3c2_b_600_600_nofilter.jpg',
              alt: '',
            },
            {
              url: 'https://loremflickr.com/cache/resized/65535_51655884817_c603f31b08_b_600_600_nofilter.jpg',
              alt: '',
            },
            {
              url: 'https://loremflickr.com/cache/resized/65535_51988395290_2aaaf1b64e_h_600_600_nofilter.jpg',
              alt: '',
            },
            {
              url: 'https://loremflickr.com/cache/resized/defaultImage.small_673_1280_nofilter.jpg',
              alt: '',
            },
          ]}
        /> */}
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
          reviewsCount={props.reviewsCount ?? 0}
          isCardList
        />
        <hr />
        <PricesCard
          currentValue={props.currentValue}
          discountPrice={discountPrice}
          previousValue={props.previousValue}
          isCardList
        />

        <div className="details">
          {mockProductPage.details.map((detail, index) => (
            <div key={index}>
              <Text as="p" type="text-card" text={detail.name} isCapitalize />
              <Text
                as="span"
                type="text-card"
                text={detail.value}
                isCapitalize
              />
            </div>
          ))}
        </div>

        <hr />

        {colorsOptions && (
          <>
            <Filter
              className="flex"
              typeFilter="colors"
              title="color"
              options={colorsOptions}
            />
          </>
        )}

        {props.sizes && (
          <FilterOrderProduct
            className="gridSpacing"
            orders={[
              {
                name: 'size',
                options: props.sizes,
              },
            ]}
            isStyles
          />
        )}

        <hr />
        <div className="buttonsWrapper">
          {productInCart && (
            <AmountProduct amount={productInCart.amount} productId={props.id} />
          )}
          <div className="card-buttons">
            {productInCart ? (
              <InputButton
                className="buttonCartRemove"
                onClick={handleClickCartRemove}
                styles="primary"
                icon={<CloseIcon />}
                text={'Remove To Cart'}
              />
            ) : (
              <InputButton
                className="buttonCartAdd"
                onClick={handleClickCartAdd}
                styles="primary"
                icon={
                  <CartIcon
                    isActive={
                      !!productsCart.find(
                        (productStore) => productStore.id === props.id,
                      )
                    }
                  />
                }
                text={'Add To Cart'}
              />
            )}

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
        </div>

        <hr />

        <div className="buttonsShared">
          <InputButton
            className="buttonShared__facebook"
            styles="primary"
            icon={<FacebookIcon />}
            text={mockProductPage.buttonShare[0].text}
          />
          <InputButton
            className="buttonShared__twitter"
            styles="primary"
            icon={<TwitterIcon />}
            text={mockProductPage.buttonShare[1].text}
          />
        </div>
      </div>
    </Styled.Wrapper>
  );
};
