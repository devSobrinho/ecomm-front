import { newArray } from '@utils/newArray';
import * as Styled from './styles';

export type StarProps = {
  id: string;
  rate: 0 | 1 | 2 | 3 | 4 | 5;
};

export const Star = ({ rate, id }: StarProps): JSX.Element => {
  const ratesStatus = newArray(5);

  return (
    <Styled.Wrapper>
      {ratesStatus.map((rateStatus, index) => {
        return (
          <svg
            key={`${index}-${id}`}
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2428 5.927L9.9913 9.44897L11.242 15.173L7.1111 11.715L2.71407 14.989L4.41286 9.32898L0.446777 5.62903L5.62724 5.58899L7.5739 0.0280762L9.07709 5.66406L14.2428 5.927Z"
              fill={`${rate >= index + 1 ? '#FFC833' : '#C1C8CE'}`}
            />
          </svg>
        );
      })}
    </Styled.Wrapper>
  );
};
