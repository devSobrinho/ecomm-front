import { useRouter } from 'next/router';

import { Categories } from '@services/types/product-types';
import { Text } from '../../components/Text';
import { GridProducts } from '@components/GridProducts';
import * as Styled from './styles';
import { Card } from '@components/Card';

export type SectionByCategoryProps = Categories;

export const SectionByCategory = ({
  ...props
}: SectionByCategoryProps): JSX.Element => {
  return (
    <Styled.SectionByCategory>
      <Text text={props.title} type="sub-title" as="h4" isUpperCase />

      <ul>
        <li>
          {props.categories.map((category) => {
            return (
              <button key={category.name}>
                <Text text={category.name} as="span" type="sub-title" />
                <GridProducts>
                  {category.products.map((product) => {
                    return (
                      <Card
                        key={product.id}
                        cardStyles="product"
                        typeText="title-card"
                        {...product}
                      />
                    );
                  })}
                </GridProducts>
              </button>
            );
          })}
        </li>
      </ul>
    </Styled.SectionByCategory>
  );
};
