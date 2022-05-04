import { featuredCardMock } from '@mock/components/sections/featuredCardMock';
import { FeaturedCard } from '../Card/FeaturedCard';
import * as Styled from './styles';

export const Banners = (): JSX.Element => {
  return (
    <Styled.ContainerBanners>
      <FeaturedCard
        key={featuredCardMock[0].title}
        {...featuredCardMock[0]}
        cardStyles="primary"
      />
      <FeaturedCard
        key={featuredCardMock[1].title}
        {...featuredCardMock[1]}
        cardStyles="secondary"
      />
      <FeaturedCard
        key={featuredCardMock[2].title}
        {...featuredCardMock[2]}
        cardStyles="alternative"
      />
    </Styled.ContainerBanners>
  );
};
