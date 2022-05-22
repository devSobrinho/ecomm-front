import { SwitchGrid, SwitchList } from '@components/icons/Switch';
import * as Styled from './styles';

type SwitchOrdersProps = {
  orderSwitchGrid: boolean;
  onClickOrderGrid: () => void;
  orderSwitchList: boolean;
  onClickOrderList: () => void;
};

export const SwitchOrders = ({ ...props }: SwitchOrdersProps): JSX.Element => {
  return (
    <>
      <Styled.Button>
        <SwitchGrid
          active={props.orderSwitchGrid}
          onClick={props.onClickOrderGrid}
        />
      </Styled.Button>
      <Styled.Button>
        <SwitchList
          active={props.orderSwitchList}
          onClick={props.onClickOrderList}
        />
      </Styled.Button>
    </>
  );
};
