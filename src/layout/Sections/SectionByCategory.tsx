import { useRouter } from 'next/router';

import { Categories } from '@services/types/product-types';
import { Text } from '../../components/Text';
import { GridProducts } from '@components/GridProducts';
import * as Styled from './styles';
import { Card } from 'src/layout/Card';
import { useState } from 'react';

export type SectionByCategoryProps = Categories;

export type CategorySelectProps = 'all' | 'bags';

export const SectionByCategory = ({
  ...props
}: SectionByCategoryProps): JSX.Element => {
  const [bestSellerSelect, setBestSellerSelect] =
    useState<CategorySelectProps>('all');

  const handleClickSelectCategory = (categorySelect: CategorySelectProps) => {
    setBestSellerSelect(categorySelect);
  };

  return (
    <Styled.SectionByCategory selectCategory={bestSellerSelect}>
      <Text text={props.title} type="sub-title" as="h4" isUpperCase />

      <ul>
        <li>
          {props.categories.map((category) => {
            return (
              <button
                key={category.name}
                onClick={() =>
                  handleClickSelectCategory(
                    category.name.toLowerCase() as CategorySelectProps,
                  )
                }
              >
                <Text text={category.name} as="span" type="sub-title" />
                {bestSellerSelect === category.name.toLowerCase() ? (
                  <GridProducts isLayoutExhibition>
                    {category.products.map((product) => {
                      return (
                        <Card
                          key={product.id}
                          cardStyles="product"
                          typeText="title-card"
                          href={`product/${product.id}`}
                          rate={product.rate}
                          {...product}
                        />
                      );
                    })}
                  </GridProducts>
                ) : null}
              </button>
            );
          })}
        </li>
      </ul>
    </Styled.SectionByCategory>
  );
};
