import {
  ReactNode,
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { ModalDimmer } from './styles';

interface ModalContextType {
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalProvider(props: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const showModal = (modalContent: ReactNode) => {
    setContent(modalContent);
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  const closeOnEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      hideModal();
    }
  }, []);

  const closeOnDimmer = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      hideModal();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [closeOnEscape]);

  return (
    <ModalContext.Provider
      value={{
        showModal,
        hideModal,
      }}
    >
      {props.children}
      {isOpen && content && (
        <ModalDimmer onClick={closeOnDimmer}>{content}</ModalDimmer>
      )}
    </ModalContext.Provider>
  );
}
