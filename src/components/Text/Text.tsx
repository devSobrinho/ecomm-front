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
  | 'sub-text';

export type TextProps = {
  text: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  type: TextType;
  isUpperCase?: boolean;
  isLowerCase?: boolean;
  isActive?: boolean;
};

export const Text = ({
  text,
  as,
  type,
  isUpperCase,
  isLowerCase,
  isActive,
}: TextProps): JSX.Element => {
  if (isUpperCase) {
    return (
      <Styled.Text as={as} type={type} isActive={isActive}>
        {text.toUpperCase()}
      </Styled.Text>
    );
  }

  if (isLowerCase) {
    return (
      <Styled.Text as={as} type={type} isActive={isActive}>
        {text.toLowerCase()}
      </Styled.Text>
    );
  }

  return (
    <Styled.Text as={as} type={type} isActive={isActive}>
      {text}
    </Styled.Text>
  );
};
