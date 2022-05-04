import Image from 'next/image';
import { Text } from '../Text';
import * as Styled from './styles';

export type OfferBannerArticleProps = {
  img: { url: string; alt: string };
  text: string;
};

export const OfferBannerArticle = ({
  img,
  text,
}: OfferBannerArticleProps): JSX.Element => {
  return (
    <Styled.ArticleOfferBanner>
      <article>
        <Image src={img.url} width={1500} height={653} alt={img.alt} />
        <Text as="h3" text={`${text}`} type={'principal'} />
      </article>
    </Styled.ArticleOfferBanner>
  );
};
