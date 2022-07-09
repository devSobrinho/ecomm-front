import { SVGProps } from 'react';

import * as Styled from './styles';

export function LogoutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Styled.Wrapper>
      <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
        <path
          fill="currentColor"
          d="M9 11h8.175l-2.55-2.55L16 7l5 5l-5 5l-1.375-1.45l2.55-2.55H9Zm3-8v2H5v14h7v2H5q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3Z"
        ></path>
      </svg>
    </Styled.Wrapper>
  );
}
