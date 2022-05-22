import * as Styled from './styles';

export type FilterTypeColorProps = {
  selectOption: boolean;
  color?: string;
};

export const FilterTypeColor = ({
  selectOption,
  color,
}: FilterTypeColorProps): JSX.Element => {
  return <Styled.ColorOption selectColor={selectOption} color={color ?? ''} />;
};
