import { featuredCardMock } from '@mock/components/sections/featuredCardMock';
import { Card } from '../Card/Card';
import * as Styled from './styles';

export const Banners = (): JSX.Element => {
  return (
    <Styled.ContainerBanners>
      <Card
        key={featuredCardMock[0].title}
        {...featuredCardMock[0]}
        cardStyles="primary"
      />
      <Card
        key={featuredCardMock[1].title}
        {...featuredCardMock[1]}
        cardStyles="secondary"
      />
      <Card
        key={featuredCardMock[2].title}
        {...featuredCardMock[2]}
        cardStyles="alternative"
      />
    </Styled.ContainerBanners>
  );
};
