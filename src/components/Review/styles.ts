import styled, { css } from 'styled-components';
import { Wrapper as WrapperStar } from '../../components/icons/Star/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`;

type LinkSummaryProps = {
  isCardList?: boolean;
};

export const LinkSummary = styled.a<LinkSummaryProps>`
  ${({ theme, isCardList }) => css`
    position: relative;
    display: flex;
    justify-content: ${isCardList ? 'start' : 'center'};
    align-items: center;
    gap: 1.6rem;
    margin: 0.5rem 0;
    z-index: 15;
    font-family: ${theme.font.family.primary};

    & ${WrapperStar} {
      ${isCardList &&
      css`
        gap: 0.3rem;
      `}
    }

    & .review-count {
      color: ${theme.colors.gray};
    }
    & .review-link {
      &:hover {
        filter: brightness(0.7);
      }
    }
  `}
`;
