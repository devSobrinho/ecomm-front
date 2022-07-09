import { SVGProps } from 'react';

import * as Styled from './styles';

export function LoginIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Styled.Wrapper>
      <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
        <path
          fill="currentColor"
          d="m10 17l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5Zm2 4v-2h7V5h-7V3h7q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"
        ></path>
      </svg>
    </Styled.Wrapper>
  );
}
