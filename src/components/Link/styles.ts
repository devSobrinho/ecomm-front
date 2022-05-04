import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primary};
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${theme.colors.blackText};
  `}
`;
