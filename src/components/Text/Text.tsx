import { MouseEvent } from 'react';
import * as Styled from './styles';

export type TextType =
  | 'logo-title'
  | 'logo-link'
  | 'principal'
  | 'title-card'
  | 'text-card'
  | 'title-section'
  | 'text-section'
  | 'title-alternative'
  | 'text-alternative'
  | 'sub-title'
  | 'sub-text'
  | 'error-message';

export type EventClickText =
  | MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>
  | MouseEvent<HTMLHeadingElement, globalThis.MouseEvent>;

export type TextProps = {
  text: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'strong' | 'label';
  type: TextType;
  isUpperCase?: boolean;
  isLowerCase?: boolean;
  isActive?: boolean;
  isCapitalize?: boolean;
  onClick?: (e: EventClickText) => void;
};

export const Text = ({
  text,
  as,
  type,
  isUpperCase,
  isLowerCase,
  isActive,
  isCapitalize,
  onClick,
}: TextProps): JSX.Element => {
  return (
    <Styled.Text
      as={as}
      type={type}
      isActive={isActive}
      isUpperCase={isUpperCase}
      isLowerCase={isLowerCase}
      isCapitalize={isCapitalize}
      onClick={onClick}
      className={type}
    >
      {text}
    </Styled.Text>
  );
};
