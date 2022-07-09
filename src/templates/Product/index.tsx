import { ProductData, RateProps } from '@services/types/product-types';
import { ProductPage } from 'src/layout/ProductPage';
import * as Styled from './styles';

interface ProductTemplates {
  product: ProductData & { images: any[] };
}

const ProductTemplates = ({ product }: ProductTemplates) => {
  console.log('os props da template', product);

  return (
    <>
      <Styled.Wrapper>
        <ProductPage
          images={product.images}
          title={product.name}
          stock={product.stockQuantity}
          previousValue={product.previousValue}
          img={{ url: product.img.url, alt: product.img.alt }}
          id={product.id}
          currentValue={product.currentValue}
          rate={product.rate as RateProps}
          reviewsCount={1000}
          colors={product.colors}
          sizes={product.size}
          href={'#'}
        />
      </Styled.Wrapper>
    </>
  );
};

export default ProductTemplates;
