import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getSizeClassName } from './utils';


function DeleteButton(props) {
  const {
    className,
    small,
    medium,
    large,
    forwardedRef,
    ...restProps
  } = props;

  const sizeClassName = getSizeClassName({ small, medium, large });

  return (
    <button
      ref={forwardedRef}
      type="button"
      {...restProps}
      className={classNames('delete', sizeClassName, className)}
    />
  );
}

DeleteButton.propTypes = {
  className: PropTypes.string,
  forwardedRef: PropTypes.any,

  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
};

export default DeleteButton
  |> memo;
