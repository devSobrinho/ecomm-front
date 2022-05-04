import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { cloneElement, ReactElement } from 'react';

type HrefProps = {
  query: {
    category: string;
  };
};

type MenuActiveLinkProps = {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
  href: HrefProps;
} & LinkProps;

export const MenuActiveLink = ({
  children,
  shouldMatchExactHref = false,
  href,
  ...rest
}: MenuActiveLinkProps) => {
  const router = useRouter();

  const { query } = useRouter();

  let isActive = false;

  if (query?.category === href?.query.category) {
    isActive = true;
  }

  if (shouldMatchExactHref && router.route === href) {
    isActive = true;
  }

  return (
    <Link href={href} {...rest}>
      {cloneElement(children, {
        style: { color: isActive ? '#40BFFF' : null },
      })}
    </Link>
  );
};
