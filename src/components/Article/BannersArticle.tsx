import { featuredCardMock } from '@mock/components/sections/featuredCardMock';
import { Card } from '../../layout/Card/Card';
import * as Styled from './styles';

export const Banners = (): JSX.Element => {
  return (
    <Styled.ContainerBanners>
      <Card
        key={featuredCardMock[0].title}
        {...featuredCardMock[0]}
        cardStyles="primary"
        href={featuredCardMock[0].id}
      />
      <Card
        key={featuredCardMock[1].title}
        {...featuredCardMock[1]}
        href={featuredCardMock[1].id}
        cardStyles="secondary"
      />
      <Card
        key={featuredCardMock[2].title}
        {...featuredCardMock[2]}
        cardStyles="alternative"
        href={featuredCardMock[2].id}
      />
    </Styled.ContainerBanners>
  );
};
