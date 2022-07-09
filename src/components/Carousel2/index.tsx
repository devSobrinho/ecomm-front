import { ArrowIcon } from '@components/icons/Arrow';
import { InputButton } from '@components/Input/InputButton';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import * as Styled from './styles';

type ImagesProduct = {
  url: string;
  alt: string;
};

export type CarouselProps = {
  imagesProduct?: ImagesProduct[];
};

export const Carousel2 = ({ imagesProduct }: CarouselProps): JSX.Element => {
  return (
    <>
      <Styled.Wrapper>
        <InputButton
          // onClick={handleClickPreviousImageCarousel}
          className="button-arrow left"
          icon={<ArrowIcon direction="left" />}
          styles="primary"
        />

        <div>
          {imagesProduct?.map((imageProduct, index) => {
            return (
              <div className="carousel-images" key={index}>
                {/* added tooltip */}
                <Image
                  alt={imageProduct.alt}
                  src={imageProduct.url}
                  width={85}
                  height={85}
                />
              </div>
            );
          })}
        </div>

        <InputButton
          className="button-arrow right"
          icon={<ArrowIcon direction="right" />}
          styles="primary"
          // onClick={handleClickNextImageCarousel}
        />
      </Styled.Wrapper>
    </>
  );
};
