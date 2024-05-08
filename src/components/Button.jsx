import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';


function Button(props) {
  const {
    as: HtmlTag = 'button',
    children,
    className,
    isLoading,
    forwardedRef,

    danger,
    success,
    warning,
    info,
    link,
    primary,

    small,
    medium,
    large,
    fullWidth,

    white,
    light,
    dark,
    black,
    text,
    ghost,

    outlined,
    rounded,
    disabled,
    ...restProps
  } = props;

  const brightnessClassName = white && 'is-white'
  || light && 'is-light'
  || dark && 'is-dark'
  || black && 'is-black'
  || text && 'is-text'
  || ghost && 'is-ghost'
  || undefined;

  const styleClassName = danger && 'is-danger'
    || success && 'is-success'
    || warning && 'is-warning'
    || info && 'is-info'
    || link && 'is-link'
    || primary && 'is-primary'
    || undefined;

  const sizeClassName = small && 'is-small'
    || medium && 'is-medium'
    || large && 'is-large'
    || undefined;

  return (
    <HtmlTag
      ref={forwardedRef}
      type="button"
      {...restProps}
      disabled={disabled || isLoading}
      className={classNames(
        'button',
        styleClassName,
        sizeClassName,
        brightnessClassName,
        isLoading && 'is-loading',
        outlined && 'is-outlined',
        rounded && 'is-rounded',
        fullWidth && 'is-fullwidth',
        className
      )}
    >
      {children}
    </HtmlTag>
  );
}

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,

  rounded: PropTypes.bool,
  forwardedRef: PropTypes.any,

  white: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  black: PropTypes.bool,
  text: PropTypes.bool,
  ghost: PropTypes.bool,

  primary: PropTypes.bool,
  link: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,

  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,

  fullWidth: PropTypes,
};

export default Button
  |> memo
  |> withForwardedRef;
