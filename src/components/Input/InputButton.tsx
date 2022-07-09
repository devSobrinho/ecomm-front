import { MouseEventHandler } from 'react';

import * as Styled from './styles';

// const icon =

export type InputButtonProps = {
  text?: string;
  icon?: JSX.Element;
  onClick?: MouseEventHandler<HTMLInputElement>;
  backgroundColor?: string;
  color?: 'primaryBlue' | 'primaryRed' | 'white' | 'blackText' | 'gray2';
  iconColor?: 'primaryBlue' | 'primaryRed' | 'white' | 'blackText';
  isCapitalize?: boolean;
  isLowercase?: boolean;
  isUppercase?: boolean;
  styles: 'default' | 'primary' | 'secondary' | 'alternative';
  className?: string;
};

export const InputButton = ({ ...props }: InputButtonProps): JSX.Element => {
  return (
    <Styled.InputButton
      styles={props.styles}
      onClick={props.onClick}
      backgroundColor={props.backgroundColor}
      color={props.color}
      isCapitalize={props.isCapitalize}
      isLowercase={props.isLowercase}
      isUppercase={props.isUppercase}
      isText={!!props.text}
      className={props.className}
    >
      {props.icon}

      <input type="button" value={props.text} />
    </Styled.InputButton>
  );
};
