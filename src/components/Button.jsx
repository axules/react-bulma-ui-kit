import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';

import {
  getBrightnessClassName,
  getSizeClassName,
  getStyleClassName,
  skeletonClassName
} from './utils';


function Button(props) {
  const {
    as: HtmlTag = 'button',
    children,
    className,
    loading,
    forwardedRef,

    skeleton,

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

    inverted,

    outlined,
    rounded,
    disabled,
    type = HtmlTag ==='button' ? 'button' : undefined,
    ...restProps
  } = props;

  const classNamesValue = classNames(
    'button',
    getStyleClassName({ danger, success, warning, info, link, primary }),
    getSizeClassName({ small, medium, large }),
    getBrightnessClassName({ white, light, dark, black, text, ghost }),
    skeletonClassName({ skeleton }),
    loading && 'is-loading',
    outlined && 'is-outlined',
    rounded && 'is-rounded',
    fullWidth && 'is-fullwidth',
    inverted && 'is-inverted',
    className
  );

  return (
    <HtmlTag
      ref={forwardedRef}
      type={type ?? undefined}
      {...restProps}
      disabled={disabled || loading}
      className={classNamesValue}
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
  skeleton: PropTypes.bool,

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

  inverted: PropTypes.bool,

  fullWidth: PropTypes.bool,
};

export default Button
  |> memo
  |> withForwardedRef;
