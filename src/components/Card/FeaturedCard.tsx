import { ProductCard } from '@services/types/product-types';
import { DiscountPrice } from '@utils/discountPrice';
import { formatPrice } from '@utils/formatPrice';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Text } from '../Text';

import * as Styled from './styles';

export type FeaturedCardProps = {
  cardStyles: 'primary' | 'secondary' | 'alternative';
} & ProductCard;

export const FeaturedCard = ({ ...props }: FeaturedCardProps): JSX.Element => {
  const { route, query } = useRouter();

  const currentValue = formatPrice(props.currentValue);
  const previousValue = formatPrice(props.previousValue);
  const discountPrice = DiscountPrice(props.currentValue, props.previousValue);

  return (
    <Styled.Wrapper cardStyles={props.cardStyles}>
      <Image width={408} height={357} src={props.img.url} alt={props.img.alt} />
      <div>
        <Text as="h4" type="title-card" text={props.title} />
        <strong>{currentValue}</strong>
        <div>
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
