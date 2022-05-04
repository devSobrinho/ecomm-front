import { Text } from '@components/Text/styles';
import styled, { css } from 'styled-components';

export const SectionByCategory = styled.section`
  ${({ theme }) => css`
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 101rem;
    position: relative;

    & ${Text} {
      font-weight: 600;
      font-size: 3.5rem;
      line-height: 5.2rem;
      color: ${theme.colors.blackText};
    }
  `}
`;

export const GridCategory = styled.div`
  ${({ theme }) => css`
    position: absolute;
    margin-top: 10rem;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    background-color: red;
    width: 100%;
    height: 90rem;

    & ${Text} {
      font-weight: 600;
      font-size: 3.5rem;
      line-height: 5.2rem;
      color: ${theme.colors.blackText};
    }
  `}
`;
