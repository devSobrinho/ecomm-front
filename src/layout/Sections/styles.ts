import { Wrapper } from '@components/GridProducts/styles';
import { Text } from '@components/Text/styles';
import styled, { css } from 'styled-components';
import { CategorySelectProps } from './SectionByCategory';

type CategoryProps = {
  selectCategory: CategorySelectProps;
};

export const SectionByCategory = styled.section<CategoryProps>`
  ${({ theme }) => css`
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 101rem;
    position: relative;

    & > ${Text} {
      font-weight: 600;
      font-size: 3.5rem;
      line-height: 5.2rem;
      color: ${theme.colors.blackText};
    }

    & ul li {
      display: flex;
      gap: 3rem;

      & button > ${Text} {
        font-weight: 500;
        font-size: 2.2rem;
        line-height: 3.3rem;
        color: ${theme.colors.blackText};
        font-family: ${theme.font.family.alternative};
      }

      & button > ${Wrapper} {
        /* display: none; */
      }
    }
  `}
`;
