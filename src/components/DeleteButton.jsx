import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getSizeClassName } from './_utils';


function DeleteButton(props) {
  const {
    className,
    small,
    medium,
    large,
    forwardedRef,
    ...restProps
  } = props;

  const classNamesValue = classNames(
    'delete',
    getSizeClassName({ small, medium, large }),
    className
  );

  return (
    <button
      ref={forwardedRef}
      type="button"
      {...restProps}
      className={classNamesValue}
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
