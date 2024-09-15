import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function ModalContent(props) {
  const { children, className, ...restProps } = props;

  return (
    <div {...restProps} className={classNames('modal-content', className)}>
      {children}
    </div>
  );
}

ModalContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ModalContent
  |> memo;
