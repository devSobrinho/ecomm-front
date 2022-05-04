import Link, { LinkProps } from 'next/link';

import * as Styled from './styles';

export type LinkSubCategoryProps = {
  text: string;
} & LinkProps;

export const LinkSubCategory = ({
  text,
  ...rest
}: LinkSubCategoryProps): JSX.Element => {
  return (
    <>
      <Link {...rest}>
        <Styled.Link>{text}</Styled.Link>
      </Link>
    </>
  );
};
