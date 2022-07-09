import { Main } from 'src/layout/Main';
import { Banners } from 'src/components/Article/BannersArticle';
import { sectionByCategoryMock } from '@mock/components/articles/sectionByCategoryMock';
import { OfferBannerArticleMock } from '@mock/components/articles/OfferBannerArticleMock';
import { SectionByCategory } from 'src/layout/Sections';
import { OfferBannerArticle } from '@components/Article/OfferBannerArticle';
import { api } from '@services/api/api';
import * as Styled from './styles';

const HomeTemplates = () => {
  // api.get('api/products/1?name=Luxurious%Concrete%Chicken').then((data) => {
  //   console.log('data', data);
  // });

  api.get('products').then((data) => {
    console.log('aaaa', data);
  });

  return (
    <>
      <Main>
        <Styled.Wrapper>
          <OfferBannerArticle {...OfferBannerArticleMock} />
          <Banners />
        </Styled.Wrapper>
        <SectionByCategory {...sectionByCategoryMock} />
      </Main>
    </>
  );
};

export default HomeTemplates;
