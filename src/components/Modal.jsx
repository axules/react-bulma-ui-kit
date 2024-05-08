import {
  memo,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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

  return (
    <div {...restProps} className={classNames('modal', className)}>
      {!transparent && <div className="modal-background"></div>}
      {children}
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  transparent: PropTypes.bool,
  onClose: PropTypes.func,
  closeOnEsc: PropTypes.bool,
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
