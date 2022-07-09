import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import { ArrowIcon } from '@components/icons/Arrow';
import { InputButton } from '@components/Input/InputButton';
import * as Styled from './styles';
import { useRouter } from 'next/router';

type ImageProduct = {
  url: string;
  alt: string;
};

export type CarouselProps = {
  imagesProduct: ImageProduct[];
};

export const Carousel = ({ imagesProduct }: CarouselProps): JSX.Element => {
  const { query } = useRouter();
  const [isNextButton, setIsNextButton] = useState(imagesProduct.length > 4);
  const [isPreviousButton, setIsPreviousButton] = useState(false);
  const [rangeStartCarousel, setRangeStartCarousel] = useState<number>(0);
  const [rangeEndCarousel, setRangeEndCarousel] = useState(4);
  const [imageSelect, setImageSelect] = useState<ImageProduct>({
    url: imagesProduct[0].url,
    alt: imagesProduct[0].alt,
  });

  useEffect(() => {
    if (query.color) {
      setIsNextButton(imagesProduct.length > 4);
      setIsPreviousButton(false);
      setRangeStartCarousel(0);
      setRangeEndCarousel(4);
      setImageSelect({
        url: imagesProduct[0].url,
        alt: imagesProduct[0].alt,
      });
    }
  }, [imagesProduct, query]);

  useEffect(() => {
    if (rangeStartCarousel > 0) {
      setIsPreviousButton(true);
    }
    if (rangeStartCarousel <= 0) {
      setIsPreviousButton(false);
    }
  }, [rangeStartCarousel]);

  const handleClickNextImageCarousel = useCallback(() => {
    setRangeEndCarousel(rangeEndCarousel + 1);
    setRangeStartCarousel(rangeStartCarousel + 1);
    if (imagesProduct) {
      setIsNextButton(imagesProduct.length > rangeEndCarousel + 1);
    }
  }, [imagesProduct, rangeEndCarousel, rangeStartCarousel]);

  const handleClickPreviousImageCarousel = useCallback(() => {
    setRangeEndCarousel(rangeEndCarousel - 1);
    setRangeStartCarousel(rangeStartCarousel - 1);
    if (imagesProduct) {
      setIsNextButton(imagesProduct.length > rangeEndCarousel - 1);
    }
  }, [imagesProduct, rangeEndCarousel, rangeStartCarousel]);

  const handleClickImageCarousel = useCallback(
    (imagesProduct: ImageProduct) => {
      setImageSelect(imagesProduct);
    },
    [],
  );

  if (!imagesProduct) {
    return <></>;
  }

  return (
    <>
      <Styled.Container>
        <Image
          src={imageSelect.url}
          alt={imageSelect.alt}
          width={375}
          height={375}
        />
        <Styled.Wrapper>
          {isPreviousButton && (
            <InputButton
              onClick={handleClickPreviousImageCarousel}
              className="button-arrow left"
              icon={<ArrowIcon direction="left" />}
              styles="primary"
            />
          )}
          {imagesProduct
            .slice(rangeStartCarousel, rangeEndCarousel)
            .map((imgProduct) => {
              return (
                <>
                  <div className="carousel-image">
                    {/* added tooltip */}
                    <Image
                      className={`${
                        imageSelect === imgProduct ? 'image__selected' : ''
                      }`}
                      onClick={() => handleClickImageCarousel(imgProduct)}
                      alt={imgProduct.alt}
                      src={imgProduct.url}
                      width={85}
                      height={85}
                    />
                  </div>
                </>
              );
            })}
          {isNextButton && (
            <InputButton
              className="button-arrow right"
              icon={<ArrowIcon direction="right" />}
              styles="primary"
              onClick={handleClickNextImageCarousel}
            />
          )}
        </Styled.Wrapper>
      </Styled.Container>
    </>
  );
};
