import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DeleteButton from './DeleteButton';
import ModalCardTitle from './ModalCardTitle';


function ModalCardHead(props) {
  const { children, className, title, onClickClose, ...restProps } = props;

  return (
    <header {...restProps} className={classNames('modal-card-head', className)}>
      {title && <ModalCardTitle>{title}</ModalCardTitle>}
      {children}
      {onClickClose && <DeleteButton onClick={onClickClose} />}
    </header>
  );
}

ModalCardHead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  onClickClose: PropTypes.func,
};

export default ModalCardHead
  |> memo;
