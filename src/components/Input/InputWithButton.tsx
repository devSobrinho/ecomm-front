import * as Styled from './styles';

export type InputWithButtonProps = {
  textSubmit?: string;
  placeholder?: string;
};

export const InputWithButton = ({
  placeholder,
  textSubmit,
}: InputWithButtonProps): JSX.Element => {
  return (
    <Styled.InputWithButton>
      <input type="text" placeholder={placeholder} />
      <button type="submit">{textSubmit}</button>
    </Styled.InputWithButton>
  );
};
