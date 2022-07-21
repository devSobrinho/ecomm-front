import { Filter } from '@components/Filter';
import { useAppSelector } from '../../store';
import * as Styled from './styles';

interface ColorsInfo {
  count: number;
  colors: { id: string; name: string; color: string }[];
}

interface BrandsInfo {
  count: number;
  brands: { id: string; name: string; amount: number }[];
}

interface SizesInfo {
  count: number;
  sizes: { id: string; name: string }[];
}

interface IFilterCategoryOne {
  colorsInfo?: ColorsInfo;
  sizesInfo?: SizesInfo;
  brandsInfo?: BrandsInfo;
  priceProductMax?: number;
  priceProductMin?: number;
}

export const FilterCategoryOne = ({
  colorsInfo,
  brandsInfo,
  sizesInfo,
  priceProductMax,
  priceProductMin,
}: IFilterCategoryOne): JSX.Element => {
  // const { filters } = useAppSelector();
  // console.log('all filters', filters);
  console.log('propssss coolor', colorsInfo, brandsInfo, sizesInfo);

  return (
    <Styled.Wrapper>
      {brandsInfo?.brands && brandsInfo.brands.length > 0 && (
        <Filter title="brand" typeFilter="list" options={brandsInfo?.brands} />
      )}

      {colorsInfo?.colors && colorsInfo.colors.length > 0 && (
        <Filter title="color" typeFilter="colors" options={colorsInfo.colors} />
      )}

      {priceProductMax && (
        <Filter
          title="range"
          typeFilter="range"
          options={[
            {
              name: 'range',
              range: {
                current: 'R$',
                maxValue: priceProductMax,
                minValue: priceProductMin ?? 0,
              },
            },
          ]}
        />
      )}

      {/* <Filter
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
      /> */}

      <Styled.ButtonMore>MORE</Styled.ButtonMore>
    </Styled.Wrapper>
  );
};
