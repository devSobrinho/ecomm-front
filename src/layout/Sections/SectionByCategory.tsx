import { useRouter } from 'next/router';

import { Categories } from '@services/types/product-types';
import { Text } from '../../components/Text';
import * as Styled from './styles';

export type SectionByCategoryProps = Categories;

export const SectionByCategory = ({
  ...props
}: SectionByCategoryProps): JSX.Element => {
  const router = useRouter();
  console.log('router section', router);

  return (
    <Styled.SectionByCategory>
      <Text text={props.title} type="sub-title" as="h4" isUpperCase />

      {props.categories.map((category) => {
        return (
          <ul key={category.name}>
            <li>
              <a href="http://">
                <Text text={category.name} as="span" type="sub-title" />
                <Styled.GridCategory>a</Styled.GridCategory>
              </a>
            </li>
          </ul>
        );
      })}
    </Styled.SectionByCategory>
  );
};
