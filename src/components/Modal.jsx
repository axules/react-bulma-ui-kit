import {
  memo,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { createPortal } from 'react-dom';

import { useStaticCallback } from '../useStaticCallback';

import ModalCard from './ModalParts/ModalCard';
import ModalCardBody from './ModalParts/ModalCardBody';
import ModalCardFooter from './ModalParts/ModalCardFooter';
import ModalCardHead from './ModalParts/ModalCardHead';
import ModalCardTitle from './ModalParts/ModalCardTitle';
import ModalContent from './ModalParts/ModalContent';


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

const ModalExport = Modal
  |> memo;

ModalExport.Content = ModalContent;
ModalExport.Card = ModalCard;
ModalExport.CardBody = ModalCardBody;
ModalExport.CardFooter = ModalCardFooter;
ModalExport.CardHead = ModalCardHead;
ModalExport.CardTitle = ModalCardTitle;

export default ModalExport;
