import { Filter } from '@components/Filter';
import * as Styled from './styles';

export type FilterCategoryOneProps = {
  title?: string;
};

export const FilterCategoryOne = ({
  title,
}: FilterCategoryOneProps): JSX.Element => {
  return (
    <Styled.Wrapper>
      <Filter
        title="hot deals"
        typeFilter="list"
        options={[
          { name: 'nike', amount: 2 },
          { name: 'airmax', amount: 48 },
          { name: 'airmax1', amount: 10 },
          { name: 'adidas', amount: 45 },
          { name: 'vans', amount: 5 },
          { name: 'all stars', amount: 77 },
          { name: 'adidas', amount: 25 },
          { name: 'nike', amount: 42 },
          { name: 'airmax3', amount: 11 },
        ]}
      />

      <Filter
        title="color"
        typeFilter="colors"
        options={[
          { name: 'blue', color: '#006CFF' },
          { name: 'red', color: '#FC3E39' },
          { name: 'black', color: '#171717' },
          { name: 'yellow', color: '#FFF600' },
          { name: 'pink', color: '#FF00B4' },
          { name: 'ellipse', color: '#EFDFDF' },
        ]}
      />

      <Filter
        title="range"
        typeFilter="range"
        options={[
          {
            name: 'range',
            range: {
              current: 'R$',
              maxValue: 555,
              minValue: 50,
            },
          },
        ]}
      />

      <Filter
        title="brand"
        typeFilter="list"
        options={[
          { name: 'nike', amount: 2 },
          { name: 'airmax', amount: 48 },
          { name: 'airmax', amount: 10 },
          { name: 'adidas', amount: 45 },
          { name: 'vans', amount: 5 },
        ]}
      />

      <Styled.ButtonMore>MORE</Styled.ButtonMore>
    </Styled.Wrapper>
  );
};
