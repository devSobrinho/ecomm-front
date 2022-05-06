import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

import { ProductCardWithRate } from '@services/types/product-types';
import { DiscountPrice } from '@utils/discountPrice';
import { formatPrice } from '@utils/formatPrice';
import { Text, TextType } from '../Text';
import * as Styled from './styles';
import { Star } from '@components/icons/Star';
import { useRouter } from 'next/router';
import Link from 'next/link';

export type CardProps = {
  cardStyles: 'primary' | 'secondary' | 'alternative' | 'product';
  typeText?: TextType;
} & ProductCardWithRate;

export const Card = ({ ...props }: CardProps): JSX.Element => {
  const { route, query } = useRouter();

  const currentValue = formatPrice(props.currentValue);
  const previousValue = formatPrice(props.previousValue);
  const discountPrice = DiscountPrice(props.currentValue, props.previousValue);

  // BUG href and alt

  return (
    <Styled.Wrapper cardStyles={props.cardStyles}>
      <Image width={408} height={357} src={props.img.url} alt={props.img.alt} />
      <div>
        <Text as="h4" type="title-card" text={props.title} />
        {props.rate && <Star rate={props.rate} id={props.id} />}

        <strong>{currentValue}</strong>
        <div className="price-discount">
          <span>{previousValue}</span>
          <span className="discountPrice">{discountPrice}% Off</span>
        </div>
      </div>
      <Link
        href={{
          pathname: 'c/',
          query: { ...query, name: props.title },
        }}
        passHref
      >
        <a />
      </Link>
    </Styled.Wrapper>
  );
};
