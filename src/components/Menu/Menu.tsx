import { ReactElement } from 'react';
import * as Styled from './styles';

type MenuProps = {
  children: ReactElement;
};

export const Menu = ({ children }: MenuProps): JSX.Element => {
  // const [isActive, setIsActive] = useState();

  return (
    <Styled.Wrapper>
      <ul>{children}</ul>
    </Styled.Wrapper>
  );
};
