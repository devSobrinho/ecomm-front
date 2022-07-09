import Image from 'next/image';
import Link from 'next/link';

import { Text } from 'src/components/Text';
import * as Styled from './styles';

export type LogoProps = {
  url?: string;
  alt?: string;
  text?: string;
};

export const Logo = ({ text, url, alt }: LogoProps): JSX.Element => {
  return (
    <Link href={'/'} passHref>
      <Styled.LogoLink>
        <Image
          src={url ?? '/assets/images/logo.svg'}
          alt={alt ?? 'logo'}
          width={0}
          height={0}
        />
        <Text as="h2" type="logo-title" text={text} />
      </Styled.LogoLink>
    </Link>
  );
};
