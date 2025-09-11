import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function ModalCardFooter(props) {
  const { children, className, right, center, ...restProps } = props;
  const classNameValue = classNames(
    'modal-card-foot',
    center && 'is-justify-content-center',
    right && 'is-justify-content-flex-end',
    className
  );

  return (
    <div {...restProps} className={classNameValue}>
      {children}
    </div>
  );
}

ModalCardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  center: PropTypes.bool,
  right: PropTypes.bool,
};

export default ModalCardFooter
  |> memo;
