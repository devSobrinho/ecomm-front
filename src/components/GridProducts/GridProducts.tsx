import * as Styled from './styles';

export type GridProductsProps = {
  children: JSX.Element | JSX.Element[];
};

export const GridProducts = ({ children }: GridProductsProps): JSX.Element => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
