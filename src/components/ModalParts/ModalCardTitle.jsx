import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function ModalCardTitle(props) {
  const { children, className, ...restProps } = props;

  return (
    <div {...restProps} className={classNames('modal-card-head', className)}>
      {children}
    </div>
  );
}

ModalCardTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ModalCardTitle
  |> memo;
