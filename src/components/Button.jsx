import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';


function Button(props) {
  const {
    as: HtmlTag = 'button',
    children,
    className,
    loading,
    forwardedRef,
    isDelete,

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
    type = HtmlTag ==='button' ? 'button' : undefined,
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
      type={type ?? undefined}
      {...restProps}
      disabled={disabled || loading}
      className={classNames(
        'button',
        styleClassName,
        sizeClassName,
        brightnessClassName,
        loading && 'is-loading',
        outlined && 'is-outlined',
        rounded && 'is-rounded',
        fullWidth && 'is-fullwidth',
        isDelete && 'is-delete',
        className
      )}
    >
      {children}
    </HtmlTag>
  );
}

Button.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,
  type: PropTypes.any,

  rounded: PropTypes.bool,
  forwardedRef: PropTypes.any,
  isDelete: PropTypes.bool,

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
