import { createPortal } from 'react-dom';
import css from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose, text1, text2 }) => {
  return createPortal(
    <div className={css.container}>
      <div className={css.content}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
