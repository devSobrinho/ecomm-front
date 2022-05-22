import * as Styled from './styles';

export type PriceProps = {
  currentValue: string;
  previousValue: string;
  discountPrice: string;
};

export const Price = ({
  currentValue,
  previousValue,
  discountPrice,
}: PriceProps): JSX.Element => {
  return (
    <Styled.Wrapper>
      <strong>{currentValue}</strong>
      <div className="price-discount">
        <span>{previousValue}</span>
        <span className="discountPrice">{discountPrice}% Off</span>
      </div>
    </Styled.Wrapper>
  );
};
