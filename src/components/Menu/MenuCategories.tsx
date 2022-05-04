import * as Styled from './styles';

export type MenuCategoriesProps = {
  title?: string;
};

export const MenuCategories = ({ title }: MenuCategoriesProps): JSX.Element => {
  return (
    <Styled.Wrapper>
      <h1>Ola</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
