import { formatPrice } from '@utils/formatPrice';
import * as Styled from './styles';

export type PriceProps = {
  currentValue: number;
  previousValue: number;
  discountPrice: number;
  isCardList?: boolean;
};

export const PricesCard = ({
  currentValue,
  previousValue,
  discountPrice,
  isCardList,
}: PriceProps): JSX.Element => {
  const currentValueFormat = formatPrice(currentValue);
  const previousValueFormat = formatPrice(previousValue);
  return (
    <Styled.Wrapper isCardList={isCardList}>
      <strong>{currentValueFormat}</strong>
      <div className="price-discount2">
        <span>{previousValueFormat}</span>
        <span className="discountPrice2">{discountPrice}% Off</span>
      </div>
    </Styled.Wrapper>
  );
};
