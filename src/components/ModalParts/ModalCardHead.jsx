import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DeleteButton from '../DeleteButton';

import ModalCardTitle from './ModalCardTitle';


function ModalCardHead(props) {
  const { children, className, title, hasClose, ...restProps } = props;

  return (
    <header {...restProps} className={classNames('modal-card-head', className)}>
      {title && <ModalCardTitle>{title}</ModalCardTitle>}
      {children}
      {hasClose && <DeleteButton />}
    </header>
  );
}

ModalCardHead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  hasClose: PropTypes.bool,
};

export default ModalCardHead
  |> memo;
