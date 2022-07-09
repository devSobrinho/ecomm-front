import { useDispatch, useSelector } from 'react-redux';
import { closeModalCart } from '../../store/modules/Cart/Cart.store';
import Modal from 'react-modal';
import { ReactNode } from 'react';

import { RootState } from '../../store';
import * as Styled from './styles';

export type ModalProps = {
  children?: ReactNode;
  ariaLabel?: string;
  paddingModal?: string;
};

export const MyModal = ({
  children,
  ariaLabel = 'modal',
  paddingModal = '3rem',
}: ModalProps): JSX.Element => {
  const { isCartOpen } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isCartOpen}
      // onAfterOpen={false}
      onRequestClose={() => dispatch(closeModalCart())}
      style={{
        content: {
          // top: '50%',
          // left: '50%',
          // right: 'auto',
          // bottom: 'auto',
          // marginRight: '-50%',
          padding: `${paddingModal}`,
          // transform: 'translate(-50%, -50%)',
        },
      }}
      contentLabel={ariaLabel}
    >
      {children}
    </Modal>
  );
};
