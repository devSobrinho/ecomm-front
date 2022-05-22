import * as Styled from './styles';

export type GridProductsProps = {
  children: JSX.Element | JSX.Element[];
  isLayoutExhibition?: boolean;
};

export const GridProducts = ({
  children,
  isLayoutExhibition = false,
}: GridProductsProps): JSX.Element => {
  return (
    <Styled.Wrapper isLayoutExhibition={isLayoutExhibition}>
      {children}
    </Styled.Wrapper>
  );
};
