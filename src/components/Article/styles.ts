import { Text } from '@components/Text/styles';
import styled, { css } from 'styled-components';

export const ArticleOfferBanner = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    & article {
      position: relative;
      h3 {
        position: absolute;
        bottom: 16.6rem;
        left: 10.5rem;
        /* max-width: 57rem; */
        border-right: 2px solid rgba(255, 255, 255, 0.75);
        animation: blinkCursor 1000ms infinite normal,
          typing 2s steps(40) 1.5s normal both;
        white-space: nowrap;
        overflow: hidden;

        &::after {
          content: '??';
          margin-left: 3rem;

          animation: alterAfter 3s linear both;
          @keyframes alterAfter {
            0% {
              content: '??';
            }
            99% {
              content: '??';
            }

            100% {
              content: '!!';
            }
          }
        }
      }

      @keyframes typing {
        0% {
          width: 0;
        }
        60% {
          width: 900px;
        }
        80% {
          width: 810px;
        }
        100% {
          width: 880px;
        }
      }

      @keyframes blinkCursor {
        from {
          border-right: 2px solid rgba(255, 255, 255, 0.75);
        }
        to {
          border-right: transparent;
        }
      }
    }
  `}
`;

export const ContainerBanners = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: absolute;
    bottom: 0px;
    gap: 2rem;
    width: 100%;
    align-items: center;
    justify-content: center;

    & img {
      width: 40.8rem;
    }
  `}
`;
