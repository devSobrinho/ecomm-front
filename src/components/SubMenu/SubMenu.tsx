import { IMenu } from '@services/types/header-types';

import { LinkSubCategory } from 'src/components/Link';
import { Text } from 'src/components/Text';
import * as Styled from './styles';

export type SubMenuProps = IMenu;

export const SubMenu = ({ ...props }: SubMenuProps): JSX.Element => {
  return (
    <>
      <Styled.List>
        {props.categories.map((category, index) => {
          const categoriesLength = category.subCategories.length;
          const name = props.name.toLocaleLowerCase();
          return (
            <Styled.GridSubCategory
              categoriesLength={categoriesLength}
              key={`${index}-${category.title}`}
            >
              <Text as="h3" type="sub-title" text={category.title} />
              <nav>
                {category.subCategories.length < 10 &&
                  category.subCategories.map((subC, index) => {
                    return (
                      <LinkSubCategory
                        href={{
                          pathname: '/c',
                          query: {
                            category: name,
                            subcategory: subC.toLocaleLowerCase(),
                          },
                        }}
                        key={`${index}-${subC}`}
                        text={subC}
                      />
                    );
                  })}
                {category.subCategories.length >= 10 && (
                  <>
                    {category.subCategories.map((subC, index) => {
                      if (index >= 9) return;

                      return (
                        <LinkSubCategory
                          href={{
                            pathname: '/c',
                            query: {
                              category: name,
                              subcategory: subC.toLocaleLowerCase(),
                            },
                          }}
                          key={`${index}-${subC}`}
                          text={subC}
                        />
                      );
                    })}
                    <LinkSubCategory
                      href={{
                        pathname: '/c',
                        query: {
                          category: name,
                          subcategory: 'ver tudo',
                        },
                      }}
                      text={'Ver tudo'}
                    />
                  </>
                )}
              </nav>
            </Styled.GridSubCategory>
          );
        })}
      </Styled.List>
    </>
  );
};
