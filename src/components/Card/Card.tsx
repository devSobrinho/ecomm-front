import Image from 'next/image';

import Link from 'next/link';
import { useState } from 'react';

import { ProductCardWithRate } from '@services/types/product-types';
import { DiscountPrice } from '@utils/discountPrice';
import { formatPrice } from '@utils/formatPrice';
import { Text, TextType } from '../Text';
import { Star } from '@components/icons/Star';
import { FavoriteIcon } from '@components/icons/Favorite';
import { CardIcon } from '@components/icons/Cart';
import * as Styled from './styles';

export type CardProps = {
  cardStyles: 'primary' | 'secondary' | 'alternative' | 'product';
  typeText?: TextType;
  href: string;
  isCardList?: boolean;
} & ProductCardWithRate;

export const Card = ({ ...props }: CardProps): JSX.Element => {
  const [hoverCardVisibility, setHoverCardVisibility] = useState(false);
  const currentValue = formatPrice(props.currentValue);
  const previousValue = formatPrice(props.previousValue);
  const discountPrice = DiscountPrice(props.currentValue, props.previousValue);

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
              <button>
                <FavoriteIcon />
              </button>
              <button>
                <CardIcon />
              </button>
            </div>
          )}
      </div>

      {props.isCardList && (
        <div className="card-content">
          <Link href={`${props.href}`} passHref>
            <a>
              <Text as="h4" type="title-card" text={props.title} />
            </a>
          </Link>
          <Link href={`/product/${props.id}/review`} passHref>
            <a className="card-review">
              <Star rate={props.rate ?? 0} id={props.id} />
              <span className="review-count">
                {props.reviewsCount ?? 0} reviews
              </span>
              <span className="review-link">Submit a review</span>
            </a>
          </Link>
          <div className="card-price">
            <strong>{currentValue}</strong>
            <div className="price-discount">
              <span>{previousValue}</span>
              <span className="discountPrice">{discountPrice}% Off</span>
            </div>
          </div>
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
            <button className="button-card">
              <CardIcon />
              Add To Cart
            </button>
            <button>
              <FavoriteIcon />
            </button>
          </div>
        </div>
      )}
      {!props.isCardList && (
        <div className="card-content">
          <Text as="h4" type="title-card" text={props.title} />
          {props.rate && <Star rate={props.rate} id={props.id} />}

          <strong>{currentValue}</strong>
          <div className="price-discount">
            <span>{previousValue}</span>
            <span className="discountPrice">{discountPrice}% Off</span>
          </div>
        </div>
      )}
      {/* <Link href={`${props.href}`} passHref>
        <a className="card-link" />
      </Link> */}
      {/* {hoverCardVisibility && !props.isCardList && (
        <div className="card-hover">
          <button>
            <FavoriteIcon />
          </button>
          <button>
            <CardIcon />
          </button>
        </div>
      )} */}
    </Styled.Wrapper>
  );
};
