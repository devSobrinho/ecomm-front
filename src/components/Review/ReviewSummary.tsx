import Link from 'next/link';

import { Star } from '@components/icons/Star';
import { RateProps } from '@services/types/product-types';
import * as Styled from './styles';

export type ReviewSummaryProps = {
  title?: string;
  productId: string;
  rate: RateProps;
  isCardList?: boolean;
  reviewsCount: number;
};

export const ReviewSummary = ({
  ...props
}: ReviewSummaryProps): JSX.Element => {
  return (
    <Link href={`/product/${props.productId}/review`} passHref>
      <Styled.LinkSummary isCardList={props.isCardList}>
        <Star rate={props.rate} id={props.productId} />
        {props.isCardList && (
          <>
            <span className="review-count">
              {props.reviewsCount ?? 0} reviews
            </span>
            <span className="review-link">Submit a review</span>
          </>
        )}
      </Styled.LinkSummary>
    </Link>
  );
};
