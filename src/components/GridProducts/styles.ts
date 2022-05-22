import styled, { css, DefaultTheme } from 'styled-components';

type WrapperProps = {
  isLayoutExhibition: boolean;
};

const exhibitionLayout = () => {
  return css`
    margin: 10rem auto;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: repeat(4, 300px);
    row-gap: 5rem;
    column-gap: 3rem;
  `;
};

const layoutProducts = (theme: DefaultTheme) => {
  return css`
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    row-gap: 4rem;
    column-gap: 2rem;
    place-content: center;

    @media ${theme.media.lteLarge} {
    }
  `;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isLayoutExhibition }) => css`
    ${isLayoutExhibition ? exhibitionLayout() : layoutProducts(theme)}
  `}
`;
