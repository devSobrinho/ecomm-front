import * as Styled from './styles';

export type InputSubmitProps = {
  text: string;
};

export const InputSubmit = ({ text }: InputSubmitProps): JSX.Element => {
  return <Styled.InputSubmit type="submit" value={text} />;
};
