import { useContext } from 'react';
import { ModalContext } from './ModalProvider';

export const useModal = () => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error('Cannot find ModalProvider');
  }

  return modalContext;
};
