import Image from 'next/image';
import React from 'react';

import { CloseIcon } from '@components/icons/Close/MaterialSymbolsCloseRounded';
import { FieldErrors, FieldValues, UseFormSetValue } from 'react-hook-form';
import * as Styled from './styles';

interface IImage {
  url: string;
  alt?: string;
}

export interface ImagesProps {
  images?: IImage[];
  width?: string | number;
  height?: string | number;
  files?: FileList;
  setFiles?: UseFormSetValue<FieldValues>;
  name?: string;
  errors?: FieldErrors;
}

export const Images = ({
  images,
  width,
  height,
  files,
  name,
  errors,
  setFiles,
}: ImagesProps): JSX.Element => {
  const handleClickDeleteImage = (index: number) => {
    if (name && setFiles && files) {
      // const newFiles = new DataTransfer();
      // Object.values(files).reduce(
      //   (acc: any, current: any, indexReduce) =>
      //     indexReduce === index ? newFiles : newFiles.items.add(current),
      //   {},
      // );
      // setFiles(name, newFiles.files);

      const newFiles = new DataTransfer();
      Object.values(files).forEach(
        (file: File, indexFile) =>
          indexFile !== index && newFiles.items.add(file),
      );
      setFiles(name, newFiles.files);
    }
  };

  return (
    <Styled.Wrapper>
      {images?.map((image, index) => {
        return (
          <Image
            key={index}
            width={width ?? 200}
            height={height ?? 200}
            src={image.url}
            alt={image.alt}
          />
        );
      })}
      {files &&
        Object.entries(files).map((file: [string, any], index) => {
          return (
            <React.Fragment key={file[1].name}>
              <div className="cardImage">
                <CloseIcon onClick={() => handleClickDeleteImage(index)} />
                <Image
                  width={width ?? 200}
                  height={height ?? 200}
                  src={URL.createObjectURL(file[1])}
                />
              </div>
            </React.Fragment>
          );
        })}
    </Styled.Wrapper>
  );
};
