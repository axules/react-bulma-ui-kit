import {
  memo,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { createPortal } from 'react-dom';

import { useStaticCallback } from '../useStaticCallback';

import ModalCard from './Modal/ModalCard';
import ModalCardBody from './Modal/ModalCardBody';
import ModalCardFooter from './Modal/ModalCardFooter';
import ModalCardHead from './Modal/ModalCardHead';
import ModalCardTitle from './Modal/ModalCardTitle';
import ModalContent from './Modal/ModalContent';


function Modal(props) {
  const {
    children,
    className,
    transparent,
    closeOnEsc,
    onClose,
    portalTo,
    ...restProps
  } = props;

  const onPressEsc = useStaticCallback((event) => {
    if (event.key === 'Escape' || event.code === 27 || event.keyCode === 27 && !event.defaultPrevented) {
      event.preventDefault();
      onClose();
    }
  });

  useEffect(
    () => {
      document.addEventListener('keydown', onPressEsc);
      return () => {
        document.removeEventListener('keydown', onPressEsc);
      };
    },
    [closeOnEsc, onPressEsc]
  );

  const modalDom = (
    <div {...restProps} className={classNames('modal', className, open && 'is-active')}>
      {!transparent && <div className="modal-background"></div>}
      {children}
    </div>
  );

  if (portalTo) {
    if (typeof portalTo === 'string') {
      const node = document.querySelector(portalTo);
      return createPortal(modalDom, node);
    }
    if (typeof portalTo === 'function') {
      const node = portalTo();
      return createPortal(modalDom, node);
    }
    return createPortal(modalDom, portalTo);
  }

  return modalDom;
}

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  transparent: PropTypes.bool,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  closeOnEsc: PropTypes.bool,
  portalTo: PropTypes.any,
};

export default Modal
  |> memo;

export {
  ModalContent,
  ModalCard,
  ModalCardBody,
  ModalCardFooter,
  ModalCardHead,
  ModalCardTitle,
};
