import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function ModalCardBody(props) {
  const { children, className, ...restProps } = props;

  return (
    <div {...restProps} className={classNames('modal-card-body', className)}>
      {children}
    </div>
  );
}

ModalCardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ModalCardBody
  |> memo;
