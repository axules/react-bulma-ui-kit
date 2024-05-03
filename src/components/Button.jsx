import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../utils/withRef';


function Button(props) {
  const {
    as, children, className, isLoading, forwardedRef, small, outlined, rounded, disabled, light, ...restProps
  } = props;
  const Tag = as;

  return (
    <Tag
      ref={forwardedRef}
      type="button"
      {...restProps}
      disabled={disabled || isLoading}
      className={classNames(
        'button',
        isLoading && 'is-loading',
        small && 'is-small',
        outlined && 'is-outlined',
        rounded && 'is-rounded',
        light && 'is-light',
        className
      )}
    >
      {children}
    </Tag>
  );
}

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  outlined: PropTypes.bool,
  light: PropTypes.bool,
  rounded: PropTypes.bool,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]),
};

Button.defaultProps = {
  as: 'button',
};

export default Button
  |> memo
  |> withForwardedRef;
