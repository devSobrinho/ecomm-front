import { IMenu } from '@services/types/header-types';

import { LinkSubCategory } from 'src/components/Link';
import { Text } from 'src/components/Text';
import * as Styled from './styles';

export type SubMenuProps = IMenu;

export const SubMenu = ({ ...props }: SubMenuProps): JSX.Element => {
  return (
    <>
      <nav>
        <Styled.List categoriesLength={props.subCategories.length}>
          {props.subCategories.map((subCategory) => {
            const name = props.name.toLocaleLowerCase();
            return (
              <Styled.GridSubCategory key={subCategory.id}>
                {subCategory.title && (
                  <Text as="h3" type="sub-title" text={subCategory.title} />
                )}
                <LinkSubCategory
                  href={{
                    pathname: '/c',
                    query: {
                      category: name,
                      subcategory: subCategory.name.toLocaleLowerCase(),
                    },
                  }}
                  text={subCategory.name}
                />
              </Styled.GridSubCategory>
            );
          })}
        </Styled.List>
      </nav>
    </>
  );
};
