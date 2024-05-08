import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function ModalCardFooter(props) {
  const { children, className, ...restProps } = props;

  return (
    <div {...restProps} className={classNames('modal-card-foot', className)}>
      {children}
    </div>
  );
}

ModalCardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ModalCardFooter
  |> memo;
